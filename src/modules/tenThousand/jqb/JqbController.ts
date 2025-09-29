import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqbs")
export default class JqbController {
  @operation({
    summary: "Get Jqbs",
  })
  @get()
  static getJqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqb",
  })
  @post("{id}")
  static createJqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
