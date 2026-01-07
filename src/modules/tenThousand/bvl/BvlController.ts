import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvl")
export default class BvlController {
  @operation({
    summary: "Get Bvl",
  })
  @get()
  static getBvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvl",
  })
  @post("{id}")
  static createBvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
