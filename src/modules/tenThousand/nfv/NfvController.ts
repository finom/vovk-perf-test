import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfvs")
export default class NfvController {
  @operation({
    summary: "Get Nfvs",
  })
  @get()
  static getNfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfv",
  })
  @post("{id}")
  static createNfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
