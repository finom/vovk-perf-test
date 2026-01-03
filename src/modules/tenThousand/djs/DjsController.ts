import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djs")
export default class DjsController {
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
    summary: "Create Djs",
  })
  @post("{id}")
  static createDjs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
