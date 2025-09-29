import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epis")
export default class EpiController {
  @operation({
    summary: "Get Epis",
  })
  @get()
  static getEpis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epi",
  })
  @post("{id}")
  static createEpi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
