import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbks")
export default class FbkController {
  @operation({
    summary: "Get Fbks",
  })
  @get()
  static getFbks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbk",
  })
  @post("{id}")
  static createFbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
