import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcv")
export default class LcvController {
  @operation({
    summary: "Get Lcv",
  })
  @get()
  static getLcv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcv",
  })
  @post("{id}")
  static createLcv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
