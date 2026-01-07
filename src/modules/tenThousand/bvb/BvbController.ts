import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvb")
export default class BvbController {
  @operation({
    summary: "Get Bvb",
  })
  @get()
  static getBvb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvb",
  })
  @post("{id}")
  static createBvb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
