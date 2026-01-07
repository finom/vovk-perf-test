import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iue")
export default class IueController {
  @operation({
    summary: "Get Iue",
  })
  @get()
  static getIue = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iue",
  })
  @post("{id}")
  static createIue = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
