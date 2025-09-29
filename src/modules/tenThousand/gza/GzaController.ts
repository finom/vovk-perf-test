import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzas")
export default class GzaController {
  @operation({
    summary: "Get Gzas",
  })
  @get()
  static getGzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gza",
  })
  @post("{id}")
  static createGza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
