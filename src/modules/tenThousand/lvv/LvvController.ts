import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvvs")
export default class LvvController {
  @operation({
    summary: "Get Lvvs",
  })
  @get()
  static getLvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvv",
  })
  @post("{id}")
  static createLvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
