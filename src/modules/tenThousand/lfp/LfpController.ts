import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfp")
export default class LfpController {
  @operation({
    summary: "Get Lfp",
  })
  @get()
  static getLfp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfp",
  })
  @post("{id}")
  static createLfp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
