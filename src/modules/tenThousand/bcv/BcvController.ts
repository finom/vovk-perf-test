import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcv")
export default class BcvController {
  @operation({
    summary: "Get Bcv",
  })
  @get()
  static getBcv = procedure({
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
