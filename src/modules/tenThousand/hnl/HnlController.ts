import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnls")
export default class HnlController {
  @operation({
    summary: "Get Hnls",
  })
  @get()
  static getHnls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hnl",
  })
  @post("{id}")
  static createHnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
