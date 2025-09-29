import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("geos")
export default class GeoController {
  @operation({
    summary: "Get Geos",
  })
  @get()
  static getGeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Geo",
  })
  @post("{id}")
  static createGeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
