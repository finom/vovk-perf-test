import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfz")
export default class LfzController {
  @operation({
    summary: "Get Lfz",
  })
  @get()
  static getLfz = procedure({
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
