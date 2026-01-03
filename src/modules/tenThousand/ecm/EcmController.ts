import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecms")
export default class EcmController {
  @operation({
    summary: "Get Ecms",
  })
  @get()
  static getEcms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ecm",
  })
  @post("{id}")
  static createEcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
