import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edas")
export default class EdaController {
  @operation({
    summary: "Get Edas",
  })
  @get()
  static getEdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eda",
  })
  @post("{id}")
  static createEda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
