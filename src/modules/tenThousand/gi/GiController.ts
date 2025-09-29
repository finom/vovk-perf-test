import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gis")
export default class GiController {
  @operation({
    summary: "Get Gis",
  })
  @get()
  static getGis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gi",
  })
  @post("{id}")
  static createGi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
