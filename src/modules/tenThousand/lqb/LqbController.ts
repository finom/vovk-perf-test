import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqbs")
export default class LqbController {
  @operation({
    summary: "Get Lqbs",
  })
  @get()
  static getLqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqb",
  })
  @post("{id}")
  static createLqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
