import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbbs")
export default class DbbController {
  @operation({
    summary: "Get Dbbs",
  })
  @get()
  static getDbbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbb",
  })
  @post("{id}")
  static createDbb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
