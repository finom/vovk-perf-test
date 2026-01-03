import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csses")
export default class CssController {
  @operation({
    summary: "Get Csses",
  })
  @get()
  static getCsses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Css",
  })
  @post("{id}")
  static createCss = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
