import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcos")
export default class FcoController {
  @operation({
    summary: "Get Fcos",
  })
  @get()
  static getFcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fco",
  })
  @post("{id}")
  static createFco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
