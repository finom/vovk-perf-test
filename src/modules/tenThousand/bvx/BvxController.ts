import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvx")
export default class BvxController {
  @operation({
    summary: "Get Bvx",
  })
  @get()
  static getBvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvx",
  })
  @post("{id}")
  static createBvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
