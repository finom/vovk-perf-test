import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyw")
export default class DywController {
  @operation({
    summary: "Get Dyw",
  })
  @get()
  static getDyw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyw",
  })
  @post("{id}")
  static createDyw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
