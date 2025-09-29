import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lzs")
export default class LzsController {
  @operation({
    summary: "Get Lzs",
  })
  @get()
  static getLzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lzs",
  })
  @post("{id}")
  static createLzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
