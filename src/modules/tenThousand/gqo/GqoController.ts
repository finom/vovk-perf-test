import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gqos")
export default class GqoController {
  @operation({
    summary: "Get Gqos",
  })
  @get()
  static getGqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gqo",
  })
  @post("{id}")
  static createGqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
