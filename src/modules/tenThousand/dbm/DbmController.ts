import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbm")
export default class DbmController {
  @operation({
    summary: "Get Dbm",
  })
  @get()
  static getDbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbm",
  })
  @post("{id}")
  static createDbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
