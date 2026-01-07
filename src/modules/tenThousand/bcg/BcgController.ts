import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcg")
export default class BcgController {
  @operation({
    summary: "Get Bcg",
  })
  @get()
  static getBcg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcg",
  })
  @post("{id}")
  static createBcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
