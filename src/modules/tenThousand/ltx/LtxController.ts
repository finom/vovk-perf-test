import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ltx")
export default class LtxController {
  @operation({
    summary: "Get Ltx",
  })
  @get()
  static getLtx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltx",
  })
  @post("{id}")
  static createLtx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
