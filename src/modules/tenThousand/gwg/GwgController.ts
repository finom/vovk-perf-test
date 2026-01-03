import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwgs")
export default class GwgController {
  @operation({
    summary: "Get Gwgs",
  })
  @get()
  static getGwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwg",
  })
  @post("{id}")
  static createGwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
