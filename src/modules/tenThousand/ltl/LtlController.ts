import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltls")
export default class LtlController {
  @operation({
    summary: "Get Ltls",
  })
  @get()
  static getLtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ltl",
  })
  @post("{id}")
  static createLtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
