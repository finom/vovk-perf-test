import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aois")
export default class AoiController {
  @operation({
    summary: "Get Aois",
  })
  @get()
  static getAois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aoi",
  })
  @post("{id}")
  static createAoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
