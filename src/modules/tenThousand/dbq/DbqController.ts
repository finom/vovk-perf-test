import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbq")
export default class DbqController {
  @operation({
    summary: "Get Dbq",
  })
  @get()
  static getDbq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbq",
  })
  @post("{id}")
  static createDbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
