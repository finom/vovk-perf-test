import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvr")
export default class BvrController {
  @operation({
    summary: "Get Bvr",
  })
  @get()
  static getBvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvr",
  })
  @post("{id}")
  static createBvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
