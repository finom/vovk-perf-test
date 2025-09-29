import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("isas")
export default class IsaController {
  @operation({
    summary: "Get Isas",
  })
  @get()
  static getIsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Isa",
  })
  @post("{id}")
  static createIsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
