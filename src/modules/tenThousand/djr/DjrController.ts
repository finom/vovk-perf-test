import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djr")
export default class DjrController {
  @operation({
    summary: "Get Djr",
  })
  @get()
  static getDjr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djr",
  })
  @post("{id}")
  static createDjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
