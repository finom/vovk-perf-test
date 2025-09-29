import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ads")
export default class AdsController {
  @operation({
    summary: "Get Ads",
  })
  @get()
  static getAds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ads",
  })
  @post("{id}")
  static createAds = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
