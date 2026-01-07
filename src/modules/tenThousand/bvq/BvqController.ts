import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvq")
export default class BvqController {
  @operation({
    summary: "Get Bvq",
  })
  @get()
  static getBvq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvq",
  })
  @post("{id}")
  static createBvq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
