import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqies")
export default class EqyController {
  @operation({
    summary: "Get Eqies",
  })
  @get()
  static getEqies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqy",
  })
  @post("{id}")
  static createEqy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
