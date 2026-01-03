import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbts")
export default class DbtController {
  @operation({
    summary: "Get Dbts",
  })
  @get()
  static getDbts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbt",
  })
  @post("{id}")
  static createDbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
