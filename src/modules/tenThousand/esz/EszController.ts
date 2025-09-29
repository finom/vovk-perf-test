import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eszs")
export default class EszController {
  @operation({
    summary: "Get Eszs",
  })
  @get()
  static getEszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esz",
  })
  @post("{id}")
  static createEsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
