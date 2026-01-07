import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccm")
export default class CcmController {
  @operation({
    summary: "Get Ccm",
  })
  @get()
  static getCcm = procedure({
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
