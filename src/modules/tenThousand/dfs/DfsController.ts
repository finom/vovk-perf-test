import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfs")
export default class DfsController {
  @operation({
    summary: "Get Dfs",
  })
  @get()
  static getDfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dfs",
  })
  @post("{id}")
  static createDfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
