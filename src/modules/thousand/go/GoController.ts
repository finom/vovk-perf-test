import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gos")
export default class GoController {
  @operation({
    summary: "Get Gos",
  })
  @get()
  static getGos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Go",
  })
  @post("{id}")
  static createGo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
