import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwg")
export default class BwgController {
  @operation({
    summary: "Get Bwg",
  })
  @get()
  static getBwg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwg",
  })
  @post("{id}")
  static createBwg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
