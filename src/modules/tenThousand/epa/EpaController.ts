import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epas")
export default class EpaController {
  @operation({
    summary: "Get Epas",
  })
  @get()
  static getEpas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epa",
  })
  @post("{id}")
  static createEpa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
