import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcls")
export default class BclController {
  @operation({
    summary: "Get Bcls",
  })
  @get()
  static getBcls = procedure({
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
