import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juos")
export default class JuoController {
  @operation({
    summary: "Get Juos",
  })
  @get()
  static getJuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Juo",
  })
  @post("{id}")
  static createJuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
