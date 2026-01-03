import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yjs")
export default class YjController {
  @operation({
    summary: "Get Yjs",
  })
  @get()
  static getYjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yj",
  })
  @post("{id}")
  static createYj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
