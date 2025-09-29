import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmts")
export default class GmtController {
  @operation({
    summary: "Get Gmts",
  })
  @get()
  static getGmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmt",
  })
  @post("{id}")
  static createGmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
