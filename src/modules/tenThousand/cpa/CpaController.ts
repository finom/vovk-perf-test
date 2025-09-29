import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpas")
export default class CpaController {
  @operation({
    summary: "Get Cpas",
  })
  @get()
  static getCpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpa",
  })
  @post("{id}")
  static createCpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
