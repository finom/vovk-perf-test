import { procedure, prefix, get, post, operation } from "vovk";

@prefix("djhs")
export default class DjhController {
  @operation({
    summary: "Get Djhs",
  })
  @get()
  static getDjhs = procedure({
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
