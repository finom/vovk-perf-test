import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnl")
export default class LnlController {
  @operation({
    summary: "Get Lnl",
  })
  @get()
  static getLnl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnl",
  })
  @post("{id}")
  static createLnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
