import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lats")
export default class LatController {
  @operation({
    summary: "Get Lats",
  })
  @get()
  static getLats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lat",
  })
  @post("{id}")
  static createLat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
