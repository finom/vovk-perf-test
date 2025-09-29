import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gras")
export default class GraController {
  @operation({
    summary: "Get Gras",
  })
  @get()
  static getGras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gra",
  })
  @post("{id}")
  static createGra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
