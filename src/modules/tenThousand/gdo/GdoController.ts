import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdos")
export default class GdoController {
  @operation({
    summary: "Get Gdos",
  })
  @get()
  static getGdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdo",
  })
  @post("{id}")
  static createGdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
