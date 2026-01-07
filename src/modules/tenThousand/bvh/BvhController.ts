import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvh")
export default class BvhController {
  @operation({
    summary: "Get Bvh",
  })
  @get()
  static getBvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvh",
  })
  @post("{id}")
  static createBvh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
