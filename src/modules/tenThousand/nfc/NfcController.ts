import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfcs")
export default class NfcController {
  @operation({
    summary: "Get Nfcs",
  })
  @get()
  static getNfcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfc",
  })
  @post("{id}")
  static createNfc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
