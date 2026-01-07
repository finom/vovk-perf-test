import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxm")
export default class BxmController {
  @operation({
    summary: "Get Bxm",
  })
  @get()
  static getBxm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxm",
  })
  @post("{id}")
  static createBxm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
