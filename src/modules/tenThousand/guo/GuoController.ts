import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guos")
export default class GuoController {
  @operation({
    summary: "Get Guos",
  })
  @get()
  static getGuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guo",
  })
  @post("{id}")
  static createGuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
