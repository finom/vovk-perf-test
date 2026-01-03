import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbds")
export default class DbdController {
  @operation({
    summary: "Get Dbds",
  })
  @get()
  static getDbds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbd",
  })
  @post("{id}")
  static createDbd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
