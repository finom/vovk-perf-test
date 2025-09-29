import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvhs")
export default class LvhController {
  @operation({
    summary: "Get Lvhs",
  })
  @get()
  static getLvhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvh",
  })
  @post("{id}")
  static createLvh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
