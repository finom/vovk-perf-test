import { procedure, prefix, get, post, operation } from "vovk";

@prefix("js")
export default class JsController {
  @operation({
    summary: "Get Js",
  })
  @get()
  static getJs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Js",
  })
  @post("{id}")
  static createJs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
