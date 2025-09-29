import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luos")
export default class LuoController {
  @operation({
    summary: "Get Luos",
  })
  @get()
  static getLuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luo",
  })
  @post("{id}")
  static createLuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
