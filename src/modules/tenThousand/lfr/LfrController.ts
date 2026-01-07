import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfr")
export default class LfrController {
  @operation({
    summary: "Get Lfr",
  })
  @get()
  static getLfr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfr",
  })
  @post("{id}")
  static createLfr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
