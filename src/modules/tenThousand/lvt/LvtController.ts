import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvts")
export default class LvtController {
  @operation({
    summary: "Get Lvts",
  })
  @get()
  static getLvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvt",
  })
  @post("{id}")
  static createLvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
