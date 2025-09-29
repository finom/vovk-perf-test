import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aros")
export default class AroController {
  @operation({
    summary: "Get Aros",
  })
  @get()
  static getAros = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aro",
  })
  @post("{id}")
  static createAro = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
