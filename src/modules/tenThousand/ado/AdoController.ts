import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ados")
export default class AdoController {
  @operation({
    summary: "Get Ados",
  })
  @get()
  static getAdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ado",
  })
  @post("{id}")
  static createAdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
