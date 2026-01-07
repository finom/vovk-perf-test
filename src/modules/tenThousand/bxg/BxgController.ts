import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxg")
export default class BxgController {
  @operation({
    summary: "Get Bxg",
  })
  @get()
  static getBxg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxg",
  })
  @post("{id}")
  static createBxg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
