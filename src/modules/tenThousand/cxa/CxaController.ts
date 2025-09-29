import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxas")
export default class CxaController {
  @operation({
    summary: "Get Cxas",
  })
  @get()
  static getCxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxa",
  })
  @post("{id}")
  static createCxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
