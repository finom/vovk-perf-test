import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxq")
export default class BxqController {
  @operation({
    summary: "Get Bxq",
  })
  @get()
  static getBxq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxq",
  })
  @post("{id}")
  static createBxq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
