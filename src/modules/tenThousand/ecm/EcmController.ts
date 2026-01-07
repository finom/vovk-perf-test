import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ecm")
export default class EcmController {
  @operation({
    summary: "Get Ecm",
  })
  @get()
  static getEcm = procedure({
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
