import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fvl")
export default class FvlController {
  @operation({
    summary: "Get Fvl",
  })
  @get()
  static getFvl = procedure({
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
