import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbws")
export default class DbwController {
  @operation({
    summary: "Get Dbws",
  })
  @get()
  static getDbws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbw",
  })
  @post("{id}")
  static createDbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
