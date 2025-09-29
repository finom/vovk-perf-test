import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnls")
export default class DnlController {
  @operation({
    summary: "Get Dnls",
  })
  @get()
  static getDnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dnl",
  })
  @post("{id}")
  static createDnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
