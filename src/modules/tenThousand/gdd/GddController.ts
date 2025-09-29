import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdds")
export default class GddController {
  @operation({
    summary: "Get Gdds",
  })
  @get()
  static getGdds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdd",
  })
  @post("{id}")
  static createGdd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
