import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfus")
export default class NfuController {
  @operation({
    summary: "Get Nfus",
  })
  @get()
  static getNfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfu",
  })
  @post("{id}")
  static createNfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
