import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnls")
export default class MnlController {
  @operation({
    summary: "Get Mnls",
  })
  @get()
  static getMnls = procedure({
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
