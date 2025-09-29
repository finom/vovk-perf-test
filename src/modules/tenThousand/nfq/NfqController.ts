import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfqs")
export default class NfqController {
  @operation({
    summary: "Get Nfqs",
  })
  @get()
  static getNfqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfq",
  })
  @post("{id}")
  static createNfq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
