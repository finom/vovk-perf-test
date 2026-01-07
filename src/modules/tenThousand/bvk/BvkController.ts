import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvk")
export default class BvkController {
  @operation({
    summary: "Get Bvk",
  })
  @get()
  static getBvk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvk",
  })
  @post("{id}")
  static createBvk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
