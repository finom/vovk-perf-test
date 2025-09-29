import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgos")
export default class JgoController {
  @operation({
    summary: "Get Jgos",
  })
  @get()
  static getJgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgo",
  })
  @post("{id}")
  static createJgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
