import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("muos")
export default class MuoController {
  @operation({
    summary: "Get Muos",
  })
  @get()
  static getMuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Muo",
  })
  @post("{id}")
  static createMuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
