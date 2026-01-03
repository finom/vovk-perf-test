import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcls")
export default class LclController {
  @operation({
    summary: "Get Lcls",
  })
  @get()
  static getLcls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lcl",
  })
  @post("{id}")
  static createLcl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
