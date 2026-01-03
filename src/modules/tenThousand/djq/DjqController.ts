import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djqs")
export default class DjqController {
  @operation({
    summary: "Get Djqs",
  })
  @get()
  static getDjqs = procedure({
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
