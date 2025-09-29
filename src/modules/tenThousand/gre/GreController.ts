import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gres")
export default class GreController {
  @operation({
    summary: "Get Gres",
  })
  @get()
  static getGres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gre",
  })
  @post("{id}")
  static createGre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
