import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jscs")
export default class JscController {
  @operation({
    summary: "Get Jscs",
  })
  @get()
  static getJscs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsc",
  })
  @post("{id}")
  static createJsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
