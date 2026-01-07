import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfp")
export default class NfpController {
  @operation({
    summary: "Get Nfp",
  })
  @get()
  static getNfp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfp",
  })
  @post("{id}")
  static createNfp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
