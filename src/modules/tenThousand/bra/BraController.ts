import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bras")
export default class BraController {
  @operation({
    summary: "Get Bras",
  })
  @get()
  static getBras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bra",
  })
  @post("{id}")
  static createBra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
