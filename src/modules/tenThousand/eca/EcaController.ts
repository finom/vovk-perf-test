import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecas")
export default class EcaController {
  @operation({
    summary: "Get Ecas",
  })
  @get()
  static getEcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eca",
  })
  @post("{id}")
  static createEca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
