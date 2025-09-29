import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqes")
export default class EqeController {
  @operation({
    summary: "Get Eqes",
  })
  @get()
  static getEqes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqe",
  })
  @post("{id}")
  static createEqe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
