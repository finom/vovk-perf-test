import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ads")
export default class AdsController {
  @operation({
    summary: "Get Ads",
  })
  @get()
  static getAds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ads",
  })
  @post("{id}")
  static createAds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
