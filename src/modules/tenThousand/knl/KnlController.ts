import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("knls")
export default class KnlController {
  @operation({
    summary: "Get Knls",
  })
  @get()
  static getKnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Knl",
  })
  @post("{id}")
  static createKnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
