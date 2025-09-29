import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lnls")
export default class LnlController {
  @operation({
    summary: "Get Lnls",
  })
  @get()
  static getLnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lnl",
  })
  @post("{id}")
  static createLnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
