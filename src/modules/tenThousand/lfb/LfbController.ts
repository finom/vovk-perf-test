import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfbs")
export default class LfbController {
  @operation({
    summary: "Get Lfbs",
  })
  @get()
  static getLfbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfb",
  })
  @post("{id}")
  static createLfb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
