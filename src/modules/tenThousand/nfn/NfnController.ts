import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfn")
export default class NfnController {
  @operation({
    summary: "Get Nfn",
  })
  @get()
  static getNfn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfn",
  })
  @post("{id}")
  static createNfn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
