import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djls")
export default class DjlController {
  @operation({
    summary: "Get Djls",
  })
  @get()
  static getDjls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djl",
  })
  @post("{id}")
  static createDjl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
