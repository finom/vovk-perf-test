import { procedure, prefix, get, post, operation } from "vovk";

@prefix("sjs")
export default class SjController {
  @operation({
    summary: "Get Sjs",
  })
  @get()
  static getSjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Sj",
  })
  @post("{id}")
  static createSj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
