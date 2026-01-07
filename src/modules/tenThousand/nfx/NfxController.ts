import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfx")
export default class NfxController {
  @operation({
    summary: "Get Nfx",
  })
  @get()
  static getNfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nfx",
  })
  @post("{id}")
  static createNfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
