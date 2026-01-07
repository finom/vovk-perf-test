import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bip")
export default class BipController {
  @operation({
    summary: "Get Bip",
  })
  @get()
  static getBip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bip",
  })
  @post("{id}")
  static createBip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
