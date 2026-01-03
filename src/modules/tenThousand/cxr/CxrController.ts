import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxrs")
export default class CxrController {
  @operation({
    summary: "Get Cxrs",
  })
  @get()
  static getCxrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxr",
  })
  @post("{id}")
  static createCxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
