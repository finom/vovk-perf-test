import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkgs")
export default class FkgController {
  @operation({
    summary: "Get Fkgs",
  })
  @get()
  static getFkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkg",
  })
  @post("{id}")
  static createFkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
