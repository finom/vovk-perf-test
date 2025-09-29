import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvls")
export default class LvlController {
  @operation({
    summary: "Get Lvls",
  })
  @get()
  static getLvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvl",
  })
  @post("{id}")
  static createLvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
