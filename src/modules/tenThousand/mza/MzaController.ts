import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzas")
export default class MzaController {
  @operation({
    summary: "Get Mzas",
  })
  @get()
  static getMzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mza",
  })
  @post("{id}")
  static createMza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
