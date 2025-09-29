import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eoms")
export default class EomController {
  @operation({
    summary: "Get Eoms",
  })
  @get()
  static getEoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eom",
  })
  @post("{id}")
  static createEom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
