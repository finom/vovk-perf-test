import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hst")
export default class HstController {
  @operation({
    summary: "Get Hst",
  })
  @get()
  static getHst = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hst",
  })
  @post("{id}")
  static createHst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
