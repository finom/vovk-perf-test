import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtls")
export default class GtlController {
  @operation({
    summary: "Get Gtls",
  })
  @get()
  static getGtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtl",
  })
  @post("{id}")
  static createGtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
