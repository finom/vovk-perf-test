import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxas")
export default class FxaController {
  @operation({
    summary: "Get Fxas",
  })
  @get()
  static getFxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxa",
  })
  @post("{id}")
  static createFxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
