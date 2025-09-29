import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqos")
export default class LqoController {
  @operation({
    summary: "Get Lqos",
  })
  @get()
  static getLqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqo",
  })
  @post("{id}")
  static createLqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
