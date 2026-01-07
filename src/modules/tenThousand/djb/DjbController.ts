import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djb")
export default class DjbController {
  @operation({
    summary: "Get Djb",
  })
  @get()
  static getDjb = procedure({
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
