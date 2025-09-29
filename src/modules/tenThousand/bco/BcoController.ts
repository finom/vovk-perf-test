import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bcos")
export default class BcoController {
  @operation({
    summary: "Get Bcos",
  })
  @get()
  static getBcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bco",
  })
  @post("{id}")
  static createBco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
