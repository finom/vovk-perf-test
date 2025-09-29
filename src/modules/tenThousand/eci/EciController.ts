import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecis")
export default class EciController {
  @operation({
    summary: "Get Ecis",
  })
  @get()
  static getEcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eci",
  })
  @post("{id}")
  static createEci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
