import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqls")
export default class BqlController {
  @operation({
    summary: "Get Bqls",
  })
  @get()
  static getBqls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bql",
  })
  @post("{id}")
  static createBql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
