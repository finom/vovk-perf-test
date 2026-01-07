import { procedure, prefix, get, post, operation } from "vovk";

@prefix("css")
export default class CssController {
  @operation({
    summary: "Get Css",
  })
  @get()
  static getCss = procedure({
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
