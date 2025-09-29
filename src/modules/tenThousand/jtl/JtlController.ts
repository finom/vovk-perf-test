import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtls")
export default class JtlController {
  @operation({
    summary: "Get Jtls",
  })
  @get()
  static getJtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtl",
  })
  @post("{id}")
  static createJtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
