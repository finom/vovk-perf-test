import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsws")
export default class JswController {
  @operation({
    summary: "Get Jsws",
  })
  @get()
  static getJsws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsw",
  })
  @post("{id}")
  static createJsw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
