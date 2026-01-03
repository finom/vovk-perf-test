import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdxes")
export default class CdxController {
  @operation({
    summary: "Get Cdxes",
  })
  @get()
  static getCdxes = procedure({
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
