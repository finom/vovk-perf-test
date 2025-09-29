import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dqos")
export default class DqoController {
  @operation({
    summary: "Get Dqos",
  })
  @get()
  static getDqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dqo",
  })
  @post("{id}")
  static createDqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
