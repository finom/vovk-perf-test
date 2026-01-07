import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djv")
export default class DjvController {
  @operation({
    summary: "Get Djv",
  })
  @get()
  static getDjv = procedure({
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
