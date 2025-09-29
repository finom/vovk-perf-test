import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyos")
export default class DyoController {
  @operation({
    summary: "Get Dyos",
  })
  @get()
  static getDyos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyo",
  })
  @post("{id}")
  static createDyo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
