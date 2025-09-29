import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpxes")
export default class GpxController {
  @operation({
    summary: "Get Gpxes",
  })
  @get()
  static getGpxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpx",
  })
  @post("{id}")
  static createGpx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
