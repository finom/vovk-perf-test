import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ad")
export default class AdController {
  @operation({
    summary: "Get Ad",
  })
  @get()
  static getAd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ad",
  })
  @post("{id}")
  static createAd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
