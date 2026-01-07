import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfb")
export default class NfbController {
  @operation({
    summary: "Get Nfb",
  })
  @get()
  static getNfb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfb",
  })
  @post("{id}")
  static createNfb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
