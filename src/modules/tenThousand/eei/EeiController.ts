import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eeis")
export default class EeiController {
  @operation({
    summary: "Get Eeis",
  })
  @get()
  static getEeis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eei",
  })
  @post("{id}")
  static createEei = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
