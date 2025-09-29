import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqcs")
export default class EqcController {
  @operation({
    summary: "Get Eqcs",
  })
  @get()
  static getEqcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqc",
  })
  @post("{id}")
  static createEqc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
