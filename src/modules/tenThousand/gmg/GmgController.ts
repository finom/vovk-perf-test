import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmgs")
export default class GmgController {
  @operation({
    summary: "Get Gmgs",
  })
  @get()
  static getGmgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gmg",
  })
  @post("{id}")
  static createGmg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
