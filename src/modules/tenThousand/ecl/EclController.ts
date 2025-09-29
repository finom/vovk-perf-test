import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ecls")
export default class EclController {
  @operation({
    summary: "Get Ecls",
  })
  @get()
  static getEcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ecl",
  })
  @post("{id}")
  static createEcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
