import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bqos")
export default class BqoController {
  @operation({
    summary: "Get Bqos",
  })
  @get()
  static getBqos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bqo",
  })
  @post("{id}")
  static createBqo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
