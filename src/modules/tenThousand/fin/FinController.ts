import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fins")
export default class FinController {
  @operation({
    summary: "Get Fins",
  })
  @get()
  static getFins = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fin",
  })
  @post("{id}")
  static createFin = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
