import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewgs")
export default class EwgController {
  @operation({
    summary: "Get Ewgs",
  })
  @get()
  static getEwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewg",
  })
  @post("{id}")
  static createEwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
