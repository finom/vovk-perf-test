import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djbs")
export default class DjbController {
  @operation({
    summary: "Get Djbs",
  })
  @get()
  static getDjbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djb",
  })
  @post("{id}")
  static createDjb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
