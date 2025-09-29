import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("izas")
export default class IzaController {
  @operation({
    summary: "Get Izas",
  })
  @get()
  static getIzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iza",
  })
  @post("{id}")
  static createIza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
