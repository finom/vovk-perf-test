import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcxes")
export default class BcxController {
  @operation({
    summary: "Get Bcxes",
  })
  @get()
  static getBcxes = procedure({
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
