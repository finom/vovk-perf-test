import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbies")
export default class DbyController {
  @operation({
    summary: "Get Dbies",
  })
  @get()
  static getDbies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dby",
  })
  @post("{id}")
  static createDby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
