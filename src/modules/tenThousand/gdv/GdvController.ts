import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdvs")
export default class GdvController {
  @operation({
    summary: "Get Gdvs",
  })
  @get()
  static getGdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdv",
  })
  @post("{id}")
  static createGdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
