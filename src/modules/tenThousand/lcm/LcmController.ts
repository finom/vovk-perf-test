import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcms")
export default class LcmController {
  @operation({
    summary: "Get Lcms",
  })
  @get()
  static getLcms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcm",
  })
  @post("{id}")
  static createLcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
