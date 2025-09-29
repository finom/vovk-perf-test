import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hnls")
export default class HnlController {
  @operation({
    summary: "Get Hnls",
  })
  @get()
  static getHnls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hnl",
  })
  @post("{id}")
  static createHnl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
