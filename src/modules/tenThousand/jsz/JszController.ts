import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jszs")
export default class JszController {
  @operation({
    summary: "Get Jszs",
  })
  @get()
  static getJszs = procedure({
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
