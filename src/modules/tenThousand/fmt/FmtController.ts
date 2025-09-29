import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmts")
export default class FmtController {
  @operation({
    summary: "Get Fmts",
  })
  @get()
  static getFmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmt",
  })
  @post("{id}")
  static createFmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
