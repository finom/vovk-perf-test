import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bmts")
export default class BmtController {
  @operation({
    summary: "Get Bmts",
  })
  @get()
  static getBmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bmt",
  })
  @post("{id}")
  static createBmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
