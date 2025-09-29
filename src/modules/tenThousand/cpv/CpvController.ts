import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cpvs")
export default class CpvController {
  @operation({
    summary: "Get Cpvs",
  })
  @get()
  static getCpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cpv",
  })
  @post("{id}")
  static createCpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
