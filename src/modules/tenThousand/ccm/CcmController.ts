import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccms")
export default class CcmController {
  @operation({
    summary: "Get Ccms",
  })
  @get()
  static getCcms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccm",
  })
  @post("{id}")
  static createCcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
