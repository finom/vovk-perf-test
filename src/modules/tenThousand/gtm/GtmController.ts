import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gtms")
export default class GtmController {
  @operation({
    summary: "Get Gtms",
  })
  @get()
  static getGtms = procedure({
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
