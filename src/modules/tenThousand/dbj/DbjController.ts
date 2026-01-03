import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbjs")
export default class DbjController {
  @operation({
    summary: "Get Dbjs",
  })
  @get()
  static getDbjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbj",
  })
  @post("{id}")
  static createDbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
