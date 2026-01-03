import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfvs")
export default class LfvController {
  @operation({
    summary: "Get Lfvs",
  })
  @get()
  static getLfvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfv",
  })
  @post("{id}")
  static createLfv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
