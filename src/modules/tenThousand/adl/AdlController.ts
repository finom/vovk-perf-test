import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adls")
export default class AdlController {
  @operation({
    summary: "Get Adls",
  })
  @get()
  static getAdls = procedure({
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
