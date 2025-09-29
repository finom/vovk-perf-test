import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmes")
export default class GmeController {
  @operation({
    summary: "Get Gmes",
  })
  @get()
  static getGmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gme",
  })
  @post("{id}")
  static createGme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
