import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmts")
export default class KmtController {
  @operation({
    summary: "Get Kmts",
  })
  @get()
  static getKmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmt",
  })
  @post("{id}")
  static createKmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
