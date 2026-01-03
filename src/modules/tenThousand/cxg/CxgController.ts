import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxgs")
export default class CxgController {
  @operation({
    summary: "Get Cxgs",
  })
  @get()
  static getCxgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxg",
  })
  @post("{id}")
  static createCxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
