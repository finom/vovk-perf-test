import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbgs")
export default class DbgController {
  @operation({
    summary: "Get Dbgs",
  })
  @get()
  static getDbgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbg",
  })
  @post("{id}")
  static createDbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
