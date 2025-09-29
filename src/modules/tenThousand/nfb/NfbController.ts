import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfbs")
export default class NfbController {
  @operation({
    summary: "Get Nfbs",
  })
  @get()
  static getNfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfb",
  })
  @post("{id}")
  static createNfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
