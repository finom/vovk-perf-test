import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbzs")
export default class DbzController {
  @operation({
    summary: "Get Dbzs",
  })
  @get()
  static getDbzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbz",
  })
  @post("{id}")
  static createDbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
