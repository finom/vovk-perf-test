import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djq")
export default class DjqController {
  @operation({
    summary: "Get Djq",
  })
  @get()
  static getDjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djq",
  })
  @post("{id}")
  static createDjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
