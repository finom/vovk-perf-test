import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akgs")
export default class AkgController {
  @operation({
    summary: "Get Akgs",
  })
  @get()
  static getAkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akg",
  })
  @post("{id}")
  static createAkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
