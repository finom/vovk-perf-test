import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adhs")
export default class AdhController {
  @operation({
    summary: "Get Adhs",
  })
  @get()
  static getAdhs = procedure({
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
