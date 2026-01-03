import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfps")
export default class LfpController {
  @operation({
    summary: "Get Lfps",
  })
  @get()
  static getLfps = procedure({
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
