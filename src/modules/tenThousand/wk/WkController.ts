import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wks")
export default class WkController {
  @operation({
    summary: "Get Wks",
  })
  @get()
  static getWks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wk",
  })
  @post("{id}")
  static createWk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
