import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdl")
export default class CdlController {
  @operation({
    summary: "Get Cdl",
  })
  @get()
  static getCdl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdl",
  })
  @post("{id}")
  static createCdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
