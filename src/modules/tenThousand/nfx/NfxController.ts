import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfxes")
export default class NfxController {
  @operation({
    summary: "Get Nfxes",
  })
  @get()
  static getNfxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfx",
  })
  @post("{id}")
  static createNfx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
