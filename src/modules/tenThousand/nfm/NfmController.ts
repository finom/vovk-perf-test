import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfms")
export default class NfmController {
  @operation({
    summary: "Get Nfms",
  })
  @get()
  static getNfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfm",
  })
  @post("{id}")
  static createNfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
