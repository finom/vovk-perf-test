import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmm")
export default class GmmController {
  @operation({
    summary: "Get Gmm",
  })
  @get()
  static getGmm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmm",
  })
  @post("{id}")
  static createGmm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
