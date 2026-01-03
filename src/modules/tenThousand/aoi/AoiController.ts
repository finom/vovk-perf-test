import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aois")
export default class AoiController {
  @operation({
    summary: "Get Aois",
  })
  @get()
  static getAois = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aoi",
  })
  @post("{id}")
  static createAoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
