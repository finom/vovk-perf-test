import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtm")
export default class GtmController {
  @operation({
    summary: "Get Gtm",
  })
  @get()
  static getGtm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gtm",
  })
  @post("{id}")
  static createGtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
