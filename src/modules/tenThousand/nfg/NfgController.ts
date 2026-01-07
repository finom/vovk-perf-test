import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfg")
export default class NfgController {
  @operation({
    summary: "Get Nfg",
  })
  @get()
  static getNfg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfg",
  })
  @post("{id}")
  static createNfg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
