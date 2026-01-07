import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcx")
export default class BcxController {
  @operation({
    summary: "Get Bcx",
  })
  @get()
  static getBcx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcx",
  })
  @post("{id}")
  static createBcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
