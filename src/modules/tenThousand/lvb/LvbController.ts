import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvbs")
export default class LvbController {
  @operation({
    summary: "Get Lvbs",
  })
  @get()
  static getLvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvb",
  })
  @post("{id}")
  static createLvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
