import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfns")
export default class LfnController {
  @operation({
    summary: "Get Lfns",
  })
  @get()
  static getLfns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfn",
  })
  @post("{id}")
  static createLfn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
