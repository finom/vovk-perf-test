import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbhs")
export default class DbhController {
  @operation({
    summary: "Get Dbhs",
  })
  @get()
  static getDbhs = procedure({
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
