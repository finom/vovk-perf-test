import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbm")
export default class BbmController {
  @operation({
    summary: "Get Bbm",
  })
  @get()
  static getBbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbm",
  })
  @post("{id}")
  static createBbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
