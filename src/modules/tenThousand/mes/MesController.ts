import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mes")
export default class MesController {
  @operation({
    summary: "Get Mes",
  })
  @get()
  static getMes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mes",
  })
  @post("{id}")
  static createMes = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
