import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxfs")
export default class CxfController {
  @operation({
    summary: "Get Cxfs",
  })
  @get()
  static getCxfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxf",
  })
  @post("{id}")
  static createCxf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
