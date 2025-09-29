import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edos")
export default class EdoController {
  @operation({
    summary: "Get Edos",
  })
  @get()
  static getEdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edo",
  })
  @post("{id}")
  static createEdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
