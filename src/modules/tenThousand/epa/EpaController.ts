import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epas")
export default class EpaController {
  @operation({
    summary: "Get Epas",
  })
  @get()
  static getEpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epa",
  })
  @post("{id}")
  static createEpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
