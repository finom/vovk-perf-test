import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdv")
export default class CdvController {
  @operation({
    summary: "Get Cdv",
  })
  @get()
  static getCdv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdv",
  })
  @post("{id}")
  static createCdv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
