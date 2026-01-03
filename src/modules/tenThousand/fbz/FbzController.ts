import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fbzs")
export default class FbzController {
  @operation({
    summary: "Get Fbzs",
  })
  @get()
  static getFbzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fbz",
  })
  @post("{id}")
  static createFbz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
