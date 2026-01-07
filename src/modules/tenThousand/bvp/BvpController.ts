import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bvp")
export default class BvpController {
  @operation({
    summary: "Get Bvp",
  })
  @get()
  static getBvp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bvp",
  })
  @post("{id}")
  static createBvp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
