import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvs")
export default class BvsController {
  @operation({
    summary: "Get Bvs",
  })
  @get()
  static getBvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvs",
  })
  @post("{id}")
  static createBvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
