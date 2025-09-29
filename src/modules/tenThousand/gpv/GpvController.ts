import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gpvs")
export default class GpvController {
  @operation({
    summary: "Get Gpvs",
  })
  @get()
  static getGpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gpv",
  })
  @post("{id}")
  static createGpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
