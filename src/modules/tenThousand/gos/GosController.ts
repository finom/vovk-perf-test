import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gos")
export default class GosController {
  @operation({
    summary: "Get Gos",
  })
  @get()
  static getGos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gos",
  })
  @post("{id}")
  static createGos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
