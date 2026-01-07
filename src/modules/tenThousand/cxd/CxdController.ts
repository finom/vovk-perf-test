import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxd")
export default class CxdController {
  @operation({
    summary: "Get Cxd",
  })
  @get()
  static getCxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxd",
  })
  @post("{id}")
  static createCxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
