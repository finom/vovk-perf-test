import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdx")
export default class CdxController {
  @operation({
    summary: "Get Cdx",
  })
  @get()
  static getCdx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdx",
  })
  @post("{id}")
  static createCdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
