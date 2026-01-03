import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkgs")
export default class KkgController {
  @operation({
    summary: "Get Kkgs",
  })
  @get()
  static getKkgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kkg",
  })
  @post("{id}")
  static createKkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
