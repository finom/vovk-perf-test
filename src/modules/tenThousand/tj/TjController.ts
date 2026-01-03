import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tjs")
export default class TjController {
  @operation({
    summary: "Get Tjs",
  })
  @get()
  static getTjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tj",
  })
  @post("{id}")
  static createTj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
