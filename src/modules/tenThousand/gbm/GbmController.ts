import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbm")
export default class GbmController {
  @operation({
    summary: "Get Gbm",
  })
  @get()
  static getGbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gbm",
  })
  @post("{id}")
  static createGbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
