import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfjs")
export default class LfjController {
  @operation({
    summary: "Get Lfjs",
  })
  @get()
  static getLfjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfj",
  })
  @post("{id}")
  static createLfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
