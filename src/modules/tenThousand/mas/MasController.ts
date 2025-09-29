import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mas")
export default class MasController {
  @operation({
    summary: "Get Mas",
  })
  @get()
  static getMas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mas",
  })
  @post("{id}")
  static createMas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
