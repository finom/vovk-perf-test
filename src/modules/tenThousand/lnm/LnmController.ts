import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnms")
export default class LnmController {
  @operation({
    summary: "Get Lnms",
  })
  @get()
  static getLnms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnm",
  })
  @post("{id}")
  static createLnm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
