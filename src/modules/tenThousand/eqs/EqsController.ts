import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqs")
export default class EqsController {
  @operation({
    summary: "Get Eqs",
  })
  @get()
  static getEqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqs",
  })
  @post("{id}")
  static createEqs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
