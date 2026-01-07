import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ad")
export default class AdController {
  @operation({
    summary: "Get Ad",
  })
  @get()
  static getAd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ad",
  })
  @post("{id}")
  static createAd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
