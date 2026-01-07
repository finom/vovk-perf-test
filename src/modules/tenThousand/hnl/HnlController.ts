import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnl")
export default class HnlController {
  @operation({
    summary: "Get Hnl",
  })
  @get()
  static getHnl = procedure({
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
