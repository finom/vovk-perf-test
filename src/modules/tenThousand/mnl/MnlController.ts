import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnls")
export default class MnlController {
  @operation({
    summary: "Get Mnls",
  })
  @get()
  static getMnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnl",
  })
  @post("{id}")
  static createMnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
