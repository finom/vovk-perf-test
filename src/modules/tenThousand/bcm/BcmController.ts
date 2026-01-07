import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcm")
export default class BcmController {
  @operation({
    summary: "Get Bcm",
  })
  @get()
  static getBcm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcm",
  })
  @post("{id}")
  static createBcm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
