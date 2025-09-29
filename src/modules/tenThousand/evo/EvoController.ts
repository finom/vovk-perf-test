import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evos")
export default class EvoController {
  @operation({
    summary: "Get Evos",
  })
  @get()
  static getEvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evo",
  })
  @post("{id}")
  static createEvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
