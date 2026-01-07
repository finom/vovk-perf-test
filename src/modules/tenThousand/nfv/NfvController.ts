import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfv")
export default class NfvController {
  @operation({
    summary: "Get Nfv",
  })
  @get()
  static getNfv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfv",
  })
  @post("{id}")
  static createNfv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
