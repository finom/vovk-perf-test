import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adgs")
export default class AdgController {
  @operation({
    summary: "Get Adgs",
  })
  @get()
  static getAdgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adg",
  })
  @post("{id}")
  static createAdg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
