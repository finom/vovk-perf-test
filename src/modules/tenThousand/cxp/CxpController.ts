import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxp")
export default class CxpController {
  @operation({
    summary: "Get Cxp",
  })
  @get()
  static getCxp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxp",
  })
  @post("{id}")
  static createCxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
