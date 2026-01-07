import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djk")
export default class DjkController {
  @operation({
    summary: "Get Djk",
  })
  @get()
  static getDjk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djk",
  })
  @post("{id}")
  static createDjk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
