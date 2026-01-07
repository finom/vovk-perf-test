import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsq")
export default class JsqController {
  @operation({
    summary: "Get Jsq",
  })
  @get()
  static getJsq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsq",
  })
  @post("{id}")
  static createJsq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
