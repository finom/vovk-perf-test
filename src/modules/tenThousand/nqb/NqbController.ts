import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqbs")
export default class NqbController {
  @operation({
    summary: "Get Nqbs",
  })
  @get()
  static getNqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqb",
  })
  @post("{id}")
  static createNqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
