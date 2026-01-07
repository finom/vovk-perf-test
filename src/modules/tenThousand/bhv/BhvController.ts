import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhv")
export default class BhvController {
  @operation({
    summary: "Get Bhv",
  })
  @get()
  static getBhv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhv",
  })
  @post("{id}")
  static createBhv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
