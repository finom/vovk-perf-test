import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wgs")
export default class WgController {
  @operation({
    summary: "Get Wgs",
  })
  @get()
  static getWgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wg",
  })
  @post("{id}")
  static createWg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
