import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nffs")
export default class NffController {
  @operation({
    summary: "Get Nffs",
  })
  @get()
  static getNffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nff",
  })
  @post("{id}")
  static createNff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
