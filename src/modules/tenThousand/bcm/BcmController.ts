import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcm")
export default class BcmController {
  @operation({
    summary: "Get Bcm",
  })
  @get()
  static getBcm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcm",
  })
  @post("{id}")
  static createBcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
