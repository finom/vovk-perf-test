import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asas")
export default class AsaController {
  @operation({
    summary: "Get Asas",
  })
  @get()
  static getAsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asa",
  })
  @post("{id}")
  static createAsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
