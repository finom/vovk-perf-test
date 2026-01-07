import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcx")
export default class BcxController {
  @operation({
    summary: "Get Bcx",
  })
  @get()
  static getBcx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcx",
  })
  @post("{id}")
  static createBcx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
