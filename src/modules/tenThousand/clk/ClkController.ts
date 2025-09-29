import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clks")
export default class ClkController {
  @operation({
    summary: "Get Clks",
  })
  @get()
  static getClks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clk",
  })
  @post("{id}")
  static createClk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
