import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfis")
export default class LfiController {
  @operation({
    summary: "Get Lfis",
  })
  @get()
  static getLfis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfi",
  })
  @post("{id}")
  static createLfi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
