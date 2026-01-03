import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsps")
export default class JspController {
  @operation({
    summary: "Get Jsps",
  })
  @get()
  static getJsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsp",
  })
  @post("{id}")
  static createJsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
