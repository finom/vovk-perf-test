import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lgis")
export default class LgiController {
  @operation({
    summary: "Get Lgis",
  })
  @get()
  static getLgis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lgi",
  })
  @post("{id}")
  static createLgi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
