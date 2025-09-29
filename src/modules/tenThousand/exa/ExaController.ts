import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exas")
export default class ExaController {
  @operation({
    summary: "Get Exas",
  })
  @get()
  static getExas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exa",
  })
  @post("{id}")
  static createExa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
