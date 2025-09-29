import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eqps")
export default class EqpController {
  @operation({
    summary: "Get Eqps",
  })
  @get()
  static getEqps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eqp",
  })
  @post("{id}")
  static createEqp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
