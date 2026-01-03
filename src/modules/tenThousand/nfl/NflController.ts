import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nfls")
export default class NflController {
  @operation({
    summary: "Get Nfls",
  })
  @get()
  static getNfls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nfl",
  })
  @post("{id}")
  static createNfl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
