import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfm")
export default class NfmController {
  @operation({
    summary: "Get Nfm",
  })
  @get()
  static getNfm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfm",
  })
  @post("{id}")
  static createNfm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
