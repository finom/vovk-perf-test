import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djg")
export default class DjgController {
  @operation({
    summary: "Get Djg",
  })
  @get()
  static getDjg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djg",
  })
  @post("{id}")
  static createDjg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
