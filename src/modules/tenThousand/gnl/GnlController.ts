import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gnls")
export default class GnlController {
  @operation({
    summary: "Get Gnls",
  })
  @get()
  static getGnls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gnl",
  })
  @post("{id}")
  static createGnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
