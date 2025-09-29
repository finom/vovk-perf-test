import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("equs")
export default class EquController {
  @operation({
    summary: "Get Equs",
  })
  @get()
  static getEqus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Equ",
  })
  @post("{id}")
  static createEqu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
