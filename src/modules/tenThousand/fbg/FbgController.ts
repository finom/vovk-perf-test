import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbgs")
export default class FbgController {
  @operation({
    summary: "Get Fbgs",
  })
  @get()
  static getFbgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbg",
  })
  @post("{id}")
  static createFbg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
