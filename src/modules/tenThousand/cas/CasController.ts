import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cas")
export default class CasController {
  @operation({
    summary: "Get Cas",
  })
  @get()
  static getCas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cas",
  })
  @post("{id}")
  static createCas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
