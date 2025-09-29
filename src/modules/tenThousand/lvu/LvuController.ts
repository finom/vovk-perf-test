import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvus")
export default class LvuController {
  @operation({
    summary: "Get Lvus",
  })
  @get()
  static getLvus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvu",
  })
  @post("{id}")
  static createLvu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
