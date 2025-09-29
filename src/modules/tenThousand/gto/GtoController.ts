import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtos")
export default class GtoController {
  @operation({
    summary: "Get Gtos",
  })
  @get()
  static getGtos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gto",
  })
  @post("{id}")
  static createGto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
