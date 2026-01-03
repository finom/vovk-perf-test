import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbcs")
export default class DbcController {
  @operation({
    summary: "Get Dbcs",
  })
  @get()
  static getDbcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbc",
  })
  @post("{id}")
  static createDbc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
