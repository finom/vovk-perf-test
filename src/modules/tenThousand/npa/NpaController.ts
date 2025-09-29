import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npas")
export default class NpaController {
  @operation({
    summary: "Get Npas",
  })
  @get()
  static getNpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npa",
  })
  @post("{id}")
  static createNpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
