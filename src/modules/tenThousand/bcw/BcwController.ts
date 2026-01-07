import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcw")
export default class BcwController {
  @operation({
    summary: "Get Bcw",
  })
  @get()
  static getBcw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcw",
  })
  @post("{id}")
  static createBcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
