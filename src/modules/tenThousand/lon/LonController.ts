import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lons")
export default class LonController {
  @operation({
    summary: "Get Lons",
  })
  @get()
  static getLons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lon",
  })
  @post("{id}")
  static createLon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
