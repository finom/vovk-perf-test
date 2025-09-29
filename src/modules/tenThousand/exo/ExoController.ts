import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("exos")
export default class ExoController {
  @operation({
    summary: "Get Exos",
  })
  @get()
  static getExos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Exo",
  })
  @post("{id}")
  static createExo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
