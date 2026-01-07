import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnl")
export default class CnlController {
  @operation({
    summary: "Get Cnl",
  })
  @get()
  static getCnl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnl",
  })
  @post("{id}")
  static createCnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
