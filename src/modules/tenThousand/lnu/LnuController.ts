import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnus")
export default class LnuController {
  @operation({
    summary: "Get Lnus",
  })
  @get()
  static getLnus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lnu",
  })
  @post("{id}")
  static createLnu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
