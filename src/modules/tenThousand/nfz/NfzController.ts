import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfzs")
export default class NfzController {
  @operation({
    summary: "Get Nfzs",
  })
  @get()
  static getNfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfz",
  })
  @post("{id}")
  static createNfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
