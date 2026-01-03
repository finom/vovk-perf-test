import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekgs")
export default class EkgController {
  @operation({
    summary: "Get Ekgs",
  })
  @get()
  static getEkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ekg",
  })
  @post("{id}")
  static createEkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
