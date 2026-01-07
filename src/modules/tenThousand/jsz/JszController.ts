import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsz")
export default class JszController {
  @operation({
    summary: "Get Jsz",
  })
  @get()
  static getJsz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsz",
  })
  @post("{id}")
  static createJsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
