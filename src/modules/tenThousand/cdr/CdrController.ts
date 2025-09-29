import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdrs")
export default class CdrController {
  @operation({
    summary: "Get Cdrs",
  })
  @get()
  static getCdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdr",
  })
  @post("{id}")
  static createCdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
