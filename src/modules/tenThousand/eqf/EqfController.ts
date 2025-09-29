import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqfs")
export default class EqfController {
  @operation({
    summary: "Get Eqfs",
  })
  @get()
  static getEqfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqf",
  })
  @post("{id}")
  static createEqf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
