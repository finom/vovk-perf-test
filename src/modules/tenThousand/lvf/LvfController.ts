import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvfs")
export default class LvfController {
  @operation({
    summary: "Get Lvfs",
  })
  @get()
  static getLvfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvf",
  })
  @post("{id}")
  static createLvf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
