import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhks")
export default class LhkController {
  @operation({
    summary: "Get Lhks",
  })
  @get()
  static getLhks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhk",
  })
  @post("{id}")
  static createLhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
