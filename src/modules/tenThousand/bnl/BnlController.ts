import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnls")
export default class BnlController {
  @operation({
    summary: "Get Bnls",
  })
  @get()
  static getBnls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnl",
  })
  @post("{id}")
  static createBnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
