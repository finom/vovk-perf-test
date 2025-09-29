import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cas")
export default class CaController {
  @operation({
    summary: "Get Cas",
  })
  @get()
  static getCas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ca",
  })
  @post("{id}")
  static createCa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
