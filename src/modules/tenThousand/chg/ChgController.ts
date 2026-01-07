import { procedure, prefix, get, post, operation } from "vovk";

@prefix("chg")
export default class ChgController {
  @operation({
    summary: "Get Chg",
  })
  @get()
  static getChg = procedure({
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
