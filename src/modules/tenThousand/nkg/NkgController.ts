import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nkgs")
export default class NkgController {
  @operation({
    summary: "Get Nkgs",
  })
  @get()
  static getNkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nkg",
  })
  @post("{id}")
  static createNkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
