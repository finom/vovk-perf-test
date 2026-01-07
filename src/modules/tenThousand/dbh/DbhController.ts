import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbh")
export default class DbhController {
  @operation({
    summary: "Get Dbh",
  })
  @get()
  static getDbh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbh",
  })
  @post("{id}")
  static createDbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
