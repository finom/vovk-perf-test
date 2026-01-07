import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvd")
export default class BvdController {
  @operation({
    summary: "Get Bvd",
  })
  @get()
  static getBvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvd",
  })
  @post("{id}")
  static createBvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
