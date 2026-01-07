import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsw")
export default class JswController {
  @operation({
    summary: "Get Jsw",
  })
  @get()
  static getJsw = procedure({
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
