import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djzs")
export default class DjzController {
  @operation({
    summary: "Get Djzs",
  })
  @get()
  static getDjzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djz",
  })
  @post("{id}")
  static createDjz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
