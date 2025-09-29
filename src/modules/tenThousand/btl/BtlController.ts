import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("btls")
export default class BtlController {
  @operation({
    summary: "Get Btls",
  })
  @get()
  static getBtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Btl",
  })
  @post("{id}")
  static createBtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
