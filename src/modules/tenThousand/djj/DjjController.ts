import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djj")
export default class DjjController {
  @operation({
    summary: "Get Djj",
  })
  @get()
  static getDjj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djj",
  })
  @post("{id}")
  static createDjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
