import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gps")
export default class GpController {
  @operation({
    summary: "Get Gps",
  })
  @get()
  static getGps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gp",
  })
  @post("{id}")
  static createGp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
