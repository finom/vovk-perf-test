import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djns")
export default class DjnController {
  @operation({
    summary: "Get Djns",
  })
  @get()
  static getDjns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djn",
  })
  @post("{id}")
  static createDjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
