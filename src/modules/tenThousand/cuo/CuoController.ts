import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuos")
export default class CuoController {
  @operation({
    summary: "Get Cuos",
  })
  @get()
  static getCuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cuo",
  })
  @post("{id}")
  static createCuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
