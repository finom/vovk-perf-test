import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvps")
export default class LvpController {
  @operation({
    summary: "Get Lvps",
  })
  @get()
  static getLvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvp",
  })
  @post("{id}")
  static createLvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
