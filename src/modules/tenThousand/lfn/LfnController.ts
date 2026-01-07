import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfn")
export default class LfnController {
  @operation({
    summary: "Get Lfn",
  })
  @get()
  static getLfn = procedure({
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
