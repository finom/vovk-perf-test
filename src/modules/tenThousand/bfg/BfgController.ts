import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfg")
export default class BfgController {
  @operation({
    summary: "Get Bfg",
  })
  @get()
  static getBfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bfg",
  })
  @post("{id}")
  static createBfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
