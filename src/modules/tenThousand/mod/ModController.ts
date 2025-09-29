import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mods")
export default class ModController {
  @operation({
    summary: "Get Mods",
  })
  @get()
  static getMods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mod",
  })
  @post("{id}")
  static createMod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
