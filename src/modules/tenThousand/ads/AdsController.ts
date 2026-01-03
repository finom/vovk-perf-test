import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ads")
export default class AdsController {
  @operation({
    summary: "Get Ads",
  })
  @get()
  static getAds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ads",
  })
  @post("{id}")
  static createAds = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
