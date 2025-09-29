import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mpas")
export default class MpaController {
  @operation({
    summary: "Get Mpas",
  })
  @get()
  static getMpas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mpa",
  })
  @post("{id}")
  static createMpa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
