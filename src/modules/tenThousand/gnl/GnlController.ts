import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnls")
export default class GnlController {
  @operation({
    summary: "Get Gnls",
  })
  @get()
  static getGnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gnl",
  })
  @post("{id}")
  static createGnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
