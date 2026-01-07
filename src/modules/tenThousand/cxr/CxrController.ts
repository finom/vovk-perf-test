import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxr")
export default class CxrController {
  @operation({
    summary: "Get Cxr",
  })
  @get()
  static getCxr = procedure({
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
