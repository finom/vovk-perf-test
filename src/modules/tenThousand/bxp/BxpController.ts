import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxp")
export default class BxpController {
  @operation({
    summary: "Get Bxp",
  })
  @get()
  static getBxp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxp",
  })
  @post("{id}")
  static createBxp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
