import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfos")
export default class GfoController {
  @operation({
    summary: "Get Gfos",
  })
  @get()
  static getGfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfo",
  })
  @post("{id}")
  static createGfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
