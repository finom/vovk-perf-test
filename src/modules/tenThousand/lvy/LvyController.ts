import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvies")
export default class LvyController {
  @operation({
    summary: "Get Lvies",
  })
  @get()
  static getLvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvy",
  })
  @post("{id}")
  static createLvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
