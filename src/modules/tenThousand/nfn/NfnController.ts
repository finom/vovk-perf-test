import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfns")
export default class NfnController {
  @operation({
    summary: "Get Nfns",
  })
  @get()
  static getNfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfn",
  })
  @post("{id}")
  static createNfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
