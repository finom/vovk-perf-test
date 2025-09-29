import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsos")
export default class NsoController {
  @operation({
    summary: "Get Nsos",
  })
  @get()
  static getNsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nso",
  })
  @post("{id}")
  static createNso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
