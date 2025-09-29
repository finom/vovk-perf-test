import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqbs")
export default class CqbController {
  @operation({
    summary: "Get Cqbs",
  })
  @get()
  static getCqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqb",
  })
  @post("{id}")
  static createCqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
