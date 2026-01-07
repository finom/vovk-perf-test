import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djw")
export default class DjwController {
  @operation({
    summary: "Get Djw",
  })
  @get()
  static getDjw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djw",
  })
  @post("{id}")
  static createDjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
