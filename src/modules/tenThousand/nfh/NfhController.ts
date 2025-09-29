import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nfhs")
export default class NfhController {
  @operation({
    summary: "Get Nfhs",
  })
  @get()
  static getNfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nfh",
  })
  @post("{id}")
  static createNfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
