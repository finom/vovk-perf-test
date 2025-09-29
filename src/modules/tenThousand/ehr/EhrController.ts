import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehrs")
export default class EhrController {
  @operation({
    summary: "Get Ehrs",
  })
  @get()
  static getEhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehr",
  })
  @post("{id}")
  static createEhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
