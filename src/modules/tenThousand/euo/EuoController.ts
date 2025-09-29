import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euos")
export default class EuoController {
  @operation({
    summary: "Get Euos",
  })
  @get()
  static getEuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euo",
  })
  @post("{id}")
  static createEuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
