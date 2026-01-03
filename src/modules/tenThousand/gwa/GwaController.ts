import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwas")
export default class GwaController {
  @operation({
    summary: "Get Gwas",
  })
  @get()
  static getGwas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwa",
  })
  @post("{id}")
  static createGwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
