import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsrs")
export default class JsrController {
  @operation({
    summary: "Get Jsrs",
  })
  @get()
  static getJsrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsr",
  })
  @post("{id}")
  static createJsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
