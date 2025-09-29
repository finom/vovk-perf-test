import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kpas")
export default class KpaController {
  @operation({
    summary: "Get Kpas",
  })
  @get()
  static getKpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kpa",
  })
  @post("{id}")
  static createKpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
