import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cfas")
export default class CfaController {
  @operation({
    summary: "Get Cfas",
  })
  @get()
  static getCfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cfa",
  })
  @post("{id}")
  static createCfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
