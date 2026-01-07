import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnr")
export default class LnrController {
  @operation({
    summary: "Get Lnr",
  })
  @get()
  static getLnr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnr",
  })
  @post("{id}")
  static createLnr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
