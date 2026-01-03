import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfms")
export default class LfmController {
  @operation({
    summary: "Get Lfms",
  })
  @get()
  static getLfms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfm",
  })
  @post("{id}")
  static createLfm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
