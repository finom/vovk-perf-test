import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkgs")
export default class LkgController {
  @operation({
    summary: "Get Lkgs",
  })
  @get()
  static getLkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkg",
  })
  @post("{id}")
  static createLkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
