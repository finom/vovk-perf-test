import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvt")
export default class BvtController {
  @operation({
    summary: "Get Bvt",
  })
  @get()
  static getBvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvt",
  })
  @post("{id}")
  static createBvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
