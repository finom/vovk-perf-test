import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buos")
export default class BuoController {
  @operation({
    summary: "Get Buos",
  })
  @get()
  static getBuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Buo",
  })
  @post("{id}")
  static createBuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
