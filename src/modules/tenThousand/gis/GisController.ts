import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gis")
export default class GisController {
  @operation({
    summary: "Get Gis",
  })
  @get()
  static getGis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gis",
  })
  @post("{id}")
  static createGis = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
