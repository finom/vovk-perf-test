import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfas")
export default class GfaController {
  @operation({
    summary: "Get Gfas",
  })
  @get()
  static getGfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfa",
  })
  @post("{id}")
  static createGfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
