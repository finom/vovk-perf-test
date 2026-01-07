import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adl")
export default class AdlController {
  @operation({
    summary: "Get Adl",
  })
  @get()
  static getAdl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Adl",
  })
  @post("{id}")
  static createAdl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
