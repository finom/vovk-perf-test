import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbs")
export default class DbController {
  @operation({
    summary: "Get Dbs",
  })
  @get()
  static getDbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Db",
  })
  @post("{id}")
  static createDb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
