import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxl")
export default class CxlController {
  @operation({
    summary: "Get Cxl",
  })
  @get()
  static getCxl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxl",
  })
  @post("{id}")
  static createCxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
