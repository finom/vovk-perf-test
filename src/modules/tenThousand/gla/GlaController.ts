import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glas")
export default class GlaController {
  @operation({
    summary: "Get Glas",
  })
  @get()
  static getGlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gla",
  })
  @post("{id}")
  static createGla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
