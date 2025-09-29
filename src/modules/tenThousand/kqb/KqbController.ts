import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqbs")
export default class KqbController {
  @operation({
    summary: "Get Kqbs",
  })
  @get()
  static getKqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqb",
  })
  @post("{id}")
  static createKqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
