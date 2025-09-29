import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqbs")
export default class GqbController {
  @operation({
    summary: "Get Gqbs",
  })
  @get()
  static getGqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqb",
  })
  @post("{id}")
  static createGqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
