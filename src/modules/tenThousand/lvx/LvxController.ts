import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvxes")
export default class LvxController {
  @operation({
    summary: "Get Lvxes",
  })
  @get()
  static getLvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvx",
  })
  @post("{id}")
  static createLvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
