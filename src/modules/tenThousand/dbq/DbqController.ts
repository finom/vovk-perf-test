import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbqs")
export default class DbqController {
  @operation({
    summary: "Get Dbqs",
  })
  @get()
  static getDbqs = procedure({
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
