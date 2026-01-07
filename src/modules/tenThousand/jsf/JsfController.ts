import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsf")
export default class JsfController {
  @operation({
    summary: "Get Jsf",
  })
  @get()
  static getJsf = procedure({
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
