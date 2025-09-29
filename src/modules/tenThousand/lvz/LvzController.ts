import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvzs")
export default class LvzController {
  @operation({
    summary: "Get Lvzs",
  })
  @get()
  static getLvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvz",
  })
  @post("{id}")
  static createLvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
