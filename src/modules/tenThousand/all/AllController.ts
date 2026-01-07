import { procedure, prefix, get, post, operation } from "vovk";

@prefix("all")
export default class AllController {
  @operation({
    summary: "Get All",
  })
  @get()
  static getAll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create All",
  })
  @post("{id}")
  static createAll = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
