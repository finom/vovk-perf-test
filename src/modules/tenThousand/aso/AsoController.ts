import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asos")
export default class AsoController {
  @operation({
    summary: "Get Asos",
  })
  @get()
  static getAsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aso",
  })
  @post("{id}")
  static createAso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
