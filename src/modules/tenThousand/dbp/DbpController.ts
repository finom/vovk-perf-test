import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbps")
export default class DbpController {
  @operation({
    summary: "Get Dbps",
  })
  @get()
  static getDbps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbp",
  })
  @post("{id}")
  static createDbp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
