import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("acas")
export default class AcaController {
  @operation({
    summary: "Get Acas",
  })
  @get()
  static getAcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aca",
  })
  @post("{id}")
  static createAca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
