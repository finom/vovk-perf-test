import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvf")
export default class BvfController {
  @operation({
    summary: "Get Bvf",
  })
  @get()
  static getBvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvf",
  })
  @post("{id}")
  static createBvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
