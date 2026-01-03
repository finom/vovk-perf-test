import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clks")
export default class ClkController {
  @operation({
    summary: "Get Clks",
  })
  @get()
  static getClks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Clk",
  })
  @post("{id}")
  static createClk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
