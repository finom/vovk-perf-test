import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfgs")
export default class NfgController {
  @operation({
    summary: "Get Nfgs",
  })
  @get()
  static getNfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfg",
  })
  @post("{id}")
  static createNfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
