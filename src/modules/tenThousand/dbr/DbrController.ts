import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbr")
export default class DbrController {
  @operation({
    summary: "Get Dbr",
  })
  @get()
  static getDbr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbr",
  })
  @post("{id}")
  static createDbr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
