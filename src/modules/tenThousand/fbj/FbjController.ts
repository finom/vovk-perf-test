import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbj")
export default class FbjController {
  @operation({
    summary: "Get Fbj",
  })
  @get()
  static getFbj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbj",
  })
  @post("{id}")
  static createFbj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
