import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxf")
export default class CxfController {
  @operation({
    summary: "Get Cxf",
  })
  @get()
  static getCxf = procedure({
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
