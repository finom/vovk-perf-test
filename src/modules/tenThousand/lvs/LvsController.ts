import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvs")
export default class LvsController {
  @operation({
    summary: "Get Lvs",
  })
  @get()
  static getLvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvs",
  })
  @post("{id}")
  static createLvs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
