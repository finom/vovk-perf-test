import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chgs")
export default class ChgController {
  @operation({
    summary: "Get Chgs",
  })
  @get()
  static getChgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Chg",
  })
  @post("{id}")
  static createChg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
