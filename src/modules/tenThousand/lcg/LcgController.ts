import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcgs")
export default class LcgController {
  @operation({
    summary: "Get Lcgs",
  })
  @get()
  static getLcgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcg",
  })
  @post("{id}")
  static createLcg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
