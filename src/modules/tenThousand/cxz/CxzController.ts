import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxz")
export default class CxzController {
  @operation({
    summary: "Get Cxz",
  })
  @get()
  static getCxz = procedure({
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
