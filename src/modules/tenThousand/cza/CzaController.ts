import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czas")
export default class CzaController {
  @operation({
    summary: "Get Czas",
  })
  @get()
  static getCzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cza",
  })
  @post("{id}")
  static createCza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
