import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adh")
export default class AdhController {
  @operation({
    summary: "Get Adh",
  })
  @get()
  static getAdh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adh",
  })
  @post("{id}")
  static createAdh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
