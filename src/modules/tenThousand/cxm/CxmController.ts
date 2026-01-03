import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxms")
export default class CxmController {
  @operation({
    summary: "Get Cxms",
  })
  @get()
  static getCxms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxm",
  })
  @post("{id}")
  static createCxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
