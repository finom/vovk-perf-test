import { procedure, prefix, get, post, operation } from "vovk";

@prefix("new")
export default class NewController {
  @operation({
    summary: "Get New",
  })
  @get()
  static getNew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create New",
  })
  @post("{id}")
  static createNew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
