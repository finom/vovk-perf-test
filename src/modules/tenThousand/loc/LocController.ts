import { procedure, prefix, get, post, operation } from "vovk";

@prefix("locs")
export default class LocController {
  @operation({
    summary: "Get Locs",
  })
  @get()
  static getLocs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Loc",
  })
  @post("{id}")
  static createLoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
