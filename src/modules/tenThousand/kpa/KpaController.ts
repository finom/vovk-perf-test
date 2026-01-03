import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpas")
export default class KpaController {
  @operation({
    summary: "Get Kpas",
  })
  @get()
  static getKpas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpa",
  })
  @post("{id}")
  static createKpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
