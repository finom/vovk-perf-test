import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvgs")
export default class LvgController {
  @operation({
    summary: "Get Lvgs",
  })
  @get()
  static getLvgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvg",
  })
  @post("{id}")
  static createLvg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
