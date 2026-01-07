import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvz")
export default class BvzController {
  @operation({
    summary: "Get Bvz",
  })
  @get()
  static getBvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvz",
  })
  @post("{id}")
  static createBvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
