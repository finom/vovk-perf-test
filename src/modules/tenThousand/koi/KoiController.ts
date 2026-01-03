import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kois")
export default class KoiController {
  @operation({
    summary: "Get Kois",
  })
  @get()
  static getKois = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Koi",
  })
  @post("{id}")
  static createKoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
