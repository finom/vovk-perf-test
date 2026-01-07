import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcl")
export default class BclController {
  @operation({
    summary: "Get Bcl",
  })
  @get()
  static getBcl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcl",
  })
  @post("{id}")
  static createBcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
