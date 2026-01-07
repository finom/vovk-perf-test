import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfm")
export default class BfmController {
  @operation({
    summary: "Get Bfm",
  })
  @get()
  static getBfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfm",
  })
  @post("{id}")
  static createBfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
