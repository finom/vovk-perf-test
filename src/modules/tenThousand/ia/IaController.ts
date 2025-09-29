import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ias")
export default class IaController {
  @operation({
    summary: "Get Ias",
  })
  @get()
  static getIas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ia",
  })
  @post("{id}")
  static createIa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
