import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htms")
export default class HtmController {
  @operation({
    summary: "Get Htms",
  })
  @get()
  static getHtms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htm",
  })
  @post("{id}")
  static createHtm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
