import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imos")
export default class ImoController {
  @operation({
    summary: "Get Imos",
  })
  @get()
  static getImos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imo",
  })
  @post("{id}")
  static createImo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
