import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afas")
export default class AfaController {
  @operation({
    summary: "Get Afas",
  })
  @get()
  static getAfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afa",
  })
  @post("{id}")
  static createAfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
