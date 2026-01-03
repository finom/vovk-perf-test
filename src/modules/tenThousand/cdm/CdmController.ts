import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdms")
export default class CdmController {
  @operation({
    summary: "Get Cdms",
  })
  @get()
  static getCdms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdm",
  })
  @post("{id}")
  static createCdm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
