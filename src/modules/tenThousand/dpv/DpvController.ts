import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpvs")
export default class DpvController {
  @operation({
    summary: "Get Dpvs",
  })
  @get()
  static getDpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpv",
  })
  @post("{id}")
  static createDpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
