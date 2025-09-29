import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npvs")
export default class NpvController {
  @operation({
    summary: "Get Npvs",
  })
  @get()
  static getNpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npv",
  })
  @post("{id}")
  static createNpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
