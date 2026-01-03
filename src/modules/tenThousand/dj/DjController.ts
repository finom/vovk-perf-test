import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djs")
export default class DjController {
  @operation({
    summary: "Get Djs",
  })
  @get()
  static getDjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dj",
  })
  @post("{id}")
  static createDj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
