import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqos")
export default class JqoController {
  @operation({
    summary: "Get Jqos",
  })
  @get()
  static getJqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqo",
  })
  @post("{id}")
  static createJqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
