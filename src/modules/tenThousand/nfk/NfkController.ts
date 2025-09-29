import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfks")
export default class NfkController {
  @operation({
    summary: "Get Nfks",
  })
  @get()
  static getNfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfk",
  })
  @post("{id}")
  static createNfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
