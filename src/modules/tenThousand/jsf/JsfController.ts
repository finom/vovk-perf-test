import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsfs")
export default class JsfController {
  @operation({
    summary: "Get Jsfs",
  })
  @get()
  static getJsfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsf",
  })
  @post("{id}")
  static createJsf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
