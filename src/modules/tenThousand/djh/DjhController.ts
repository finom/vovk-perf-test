import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djh")
export default class DjhController {
  @operation({
    summary: "Get Djh",
  })
  @get()
  static getDjh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Djh",
  })
  @post("{id}")
  static createDjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
