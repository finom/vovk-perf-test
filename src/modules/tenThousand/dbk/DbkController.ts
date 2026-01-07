import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbk")
export default class DbkController {
  @operation({
    summary: "Get Dbk",
  })
  @get()
  static getDbk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbk",
  })
  @post("{id}")
  static createDbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
