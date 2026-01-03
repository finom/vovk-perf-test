import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxks")
export default class CxkController {
  @operation({
    summary: "Get Cxks",
  })
  @get()
  static getCxks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxk",
  })
  @post("{id}")
  static createCxk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
