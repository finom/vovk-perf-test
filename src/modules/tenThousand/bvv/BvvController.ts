import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvv")
export default class BvvController {
  @operation({
    summary: "Get Bvv",
  })
  @get()
  static getBvv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvv",
  })
  @post("{id}")
  static createBvv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
