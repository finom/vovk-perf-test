import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bnls")
export default class BnlController {
  @operation({
    summary: "Get Bnls",
  })
  @get()
  static getBnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bnl",
  })
  @post("{id}")
  static createBnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
