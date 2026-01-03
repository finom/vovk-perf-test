import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxis")
export default class CxiController {
  @operation({
    summary: "Get Cxis",
  })
  @get()
  static getCxis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxi",
  })
  @post("{id}")
  static createCxi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
