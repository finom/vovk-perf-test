import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxd")
export default class BxdController {
  @operation({
    summary: "Get Bxd",
  })
  @get()
  static getBxd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxd",
  })
  @post("{id}")
  static createBxd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
