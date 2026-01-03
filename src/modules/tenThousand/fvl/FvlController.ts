import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvls")
export default class FvlController {
  @operation({
    summary: "Get Fvls",
  })
  @get()
  static getFvls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fvl",
  })
  @post("{id}")
  static createFvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
