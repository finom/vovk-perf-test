import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cqos")
export default class CqoController {
  @operation({
    summary: "Get Cqos",
  })
  @get()
  static getCqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cqo",
  })
  @post("{id}")
  static createCqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
