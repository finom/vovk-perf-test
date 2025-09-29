import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnls")
export default class CnlController {
  @operation({
    summary: "Get Cnls",
  })
  @get()
  static getCnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnl",
  })
  @post("{id}")
  static createCnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
