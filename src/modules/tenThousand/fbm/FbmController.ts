import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbms")
export default class FbmController {
  @operation({
    summary: "Get Fbms",
  })
  @get()
  static getFbms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbm",
  })
  @post("{id}")
  static createFbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
