import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvws")
export default class LvwController {
  @operation({
    summary: "Get Lvws",
  })
  @get()
  static getLvws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvw",
  })
  @post("{id}")
  static createLvw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
