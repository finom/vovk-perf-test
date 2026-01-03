import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbvs")
export default class FbvController {
  @operation({
    summary: "Get Fbvs",
  })
  @get()
  static getFbvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbv",
  })
  @post("{id}")
  static createFbv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
