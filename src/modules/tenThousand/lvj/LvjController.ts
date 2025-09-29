import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvjs")
export default class LvjController {
  @operation({
    summary: "Get Lvjs",
  })
  @get()
  static getLvjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvj",
  })
  @post("{id}")
  static createLvj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
