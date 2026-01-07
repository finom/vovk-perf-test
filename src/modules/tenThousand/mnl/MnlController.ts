import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnl")
export default class MnlController {
  @operation({
    summary: "Get Mnl",
  })
  @get()
  static getMnl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mnl",
  })
  @post("{id}")
  static createMnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
