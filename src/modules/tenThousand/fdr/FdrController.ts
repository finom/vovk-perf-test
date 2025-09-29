import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdrs")
export default class FdrController {
  @operation({
    summary: "Get Fdrs",
  })
  @get()
  static getFdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdr",
  })
  @post("{id}")
  static createFdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
