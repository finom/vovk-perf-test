import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aaps")
export default class AapController {
  @operation({
    summary: "Get Aaps",
  })
  @get()
  static getAaps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aap",
  })
  @post("{id}")
  static createAap = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
