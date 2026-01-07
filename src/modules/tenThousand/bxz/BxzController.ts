import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bxz")
export default class BxzController {
  @operation({
    summary: "Get Bxz",
  })
  @get()
  static getBxz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bxz",
  })
  @post("{id}")
  static createBxz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
