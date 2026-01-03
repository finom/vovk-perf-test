import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxzs")
export default class CxzController {
  @operation({
    summary: "Get Cxzs",
  })
  @get()
  static getCxzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxz",
  })
  @post("{id}")
  static createCxz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
