import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eszs")
export default class EszController {
  @operation({
    summary: "Get Eszs",
  })
  @get()
  static getEszs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Esz",
  })
  @post("{id}")
  static createEsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
