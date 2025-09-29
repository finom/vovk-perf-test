import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kqos")
export default class KqoController {
  @operation({
    summary: "Get Kqos",
  })
  @get()
  static getKqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kqo",
  })
  @post("{id}")
  static createKqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
