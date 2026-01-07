import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epi")
export default class EpiController {
  @operation({
    summary: "Get Epi",
  })
  @get()
  static getEpi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Epi",
  })
  @post("{id}")
  static createEpi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
