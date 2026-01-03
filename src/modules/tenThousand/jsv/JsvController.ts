import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsvs")
export default class JsvController {
  @operation({
    summary: "Get Jsvs",
  })
  @get()
  static getJsvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsv",
  })
  @post("{id}")
  static createJsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
