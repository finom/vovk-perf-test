import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbx")
export default class DbxController {
  @operation({
    summary: "Get Dbx",
  })
  @get()
  static getDbx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbx",
  })
  @post("{id}")
  static createDbx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
