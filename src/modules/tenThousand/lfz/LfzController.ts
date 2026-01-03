import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfzs")
export default class LfzController {
  @operation({
    summary: "Get Lfzs",
  })
  @get()
  static getLfzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfz",
  })
  @post("{id}")
  static createLfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
