import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eals")
export default class EalController {
  @operation({
    summary: "Get Eals",
  })
  @get()
  static getEals = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eal",
  })
  @post("{id}")
  static createEal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
