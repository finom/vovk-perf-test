import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnies")
export default class LnyController {
  @operation({
    summary: "Get Lnies",
  })
  @get()
  static getLnies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lny",
  })
  @post("{id}")
  static createLny = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
