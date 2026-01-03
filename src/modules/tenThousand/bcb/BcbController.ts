import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcbs")
export default class BcbController {
  @operation({
    summary: "Get Bcbs",
  })
  @get()
  static getBcbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcb",
  })
  @post("{id}")
  static createBcb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
