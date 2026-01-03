import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djvs")
export default class DjvController {
  @operation({
    summary: "Get Djvs",
  })
  @get()
  static getDjvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djv",
  })
  @post("{id}")
  static createDjv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
