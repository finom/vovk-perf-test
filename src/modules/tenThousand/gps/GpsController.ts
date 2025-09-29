import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gps")
export default class GpsController {
  @operation({
    summary: "Get Gps",
  })
  @get()
  static getGps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gps",
  })
  @post("{id}")
  static createGps = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
