import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcvs")
export default class BcvController {
  @operation({
    summary: "Get Bcvs",
  })
  @get()
  static getBcvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcv",
  })
  @post("{id}")
  static createBcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
