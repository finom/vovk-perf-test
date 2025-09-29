import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccas")
export default class CcaController {
  @operation({
    summary: "Get Ccas",
  })
  @get()
  static getCcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cca",
  })
  @post("{id}")
  static createCca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
