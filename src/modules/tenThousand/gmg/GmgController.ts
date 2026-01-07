import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gmg")
export default class GmgController {
  @operation({
    summary: "Get Gmg",
  })
  @get()
  static getGmg = procedure({
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
