import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbfs")
export default class DbfController {
  @operation({
    summary: "Get Dbfs",
  })
  @get()
  static getDbfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbf",
  })
  @post("{id}")
  static createDbf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
