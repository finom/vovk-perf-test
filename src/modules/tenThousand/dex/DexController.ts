import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dexes")
export default class DexController {
  @operation({
    summary: "Get Dexes",
  })
  @get()
  static getDexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dex",
  })
  @post("{id}")
  static createDex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
