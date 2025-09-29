import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kzas")
export default class KzaController {
  @operation({
    summary: "Get Kzas",
  })
  @get()
  static getKzas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kza",
  })
  @post("{id}")
  static createKza = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
