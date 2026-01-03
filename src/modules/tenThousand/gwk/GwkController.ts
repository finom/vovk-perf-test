import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwks")
export default class GwkController {
  @operation({
    summary: "Get Gwks",
  })
  @get()
  static getGwks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwk",
  })
  @post("{id}")
  static createGwk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
