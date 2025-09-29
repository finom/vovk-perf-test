import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idas")
export default class IdaController {
  @operation({
    summary: "Get Idas",
  })
  @get()
  static getIdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ida",
  })
  @post("{id}")
  static createIda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
