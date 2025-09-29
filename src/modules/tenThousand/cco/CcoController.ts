import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccos")
export default class CcoController {
  @operation({
    summary: "Get Ccos",
  })
  @get()
  static getCcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cco",
  })
  @post("{id}")
  static createCco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
