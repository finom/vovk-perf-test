import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkgs")
export default class BkgController {
  @operation({
    summary: "Get Bkgs",
  })
  @get()
  static getBkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkg",
  })
  @post("{id}")
  static createBkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
