import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbv")
export default class DbvController {
  @operation({
    summary: "Get Dbv",
  })
  @get()
  static getDbv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbv",
  })
  @post("{id}")
  static createDbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
