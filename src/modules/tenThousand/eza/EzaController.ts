import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezas")
export default class EzaController {
  @operation({
    summary: "Get Ezas",
  })
  @get()
  static getEzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eza",
  })
  @post("{id}")
  static createEza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
