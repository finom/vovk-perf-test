import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnl")
export default class BnlController {
  @operation({
    summary: "Get Bnl",
  })
  @get()
  static getBnl = procedure({
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
