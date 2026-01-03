import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkgs")
export default class GkgController {
  @operation({
    summary: "Get Gkgs",
  })
  @get()
  static getGkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkg",
  })
  @post("{id}")
  static createGkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
