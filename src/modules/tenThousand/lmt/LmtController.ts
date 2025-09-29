import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmts")
export default class LmtController {
  @operation({
    summary: "Get Lmts",
  })
  @get()
  static getLmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmt",
  })
  @post("{id}")
  static createLmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
