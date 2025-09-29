import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdts")
export default class CdtController {
  @operation({
    summary: "Get Cdts",
  })
  @get()
  static getCdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdt",
  })
  @post("{id}")
  static createCdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
