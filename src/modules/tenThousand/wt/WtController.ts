import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wts")
export default class WtController {
  @operation({
    summary: "Get Wts",
  })
  @get()
  static getWts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wt",
  })
  @post("{id}")
  static createWt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
