import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwgs")
export default class FwgController {
  @operation({
    summary: "Get Fwgs",
  })
  @get()
  static getFwgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fwg",
  })
  @post("{id}")
  static createFwg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
