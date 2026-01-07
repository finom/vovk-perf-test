import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfp")
export default class BfpController {
  @operation({
    summary: "Get Bfp",
  })
  @get()
  static getBfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfp",
  })
  @post("{id}")
  static createBfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
