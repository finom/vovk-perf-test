import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ggis")
export default class GgiController {
  @operation({
    summary: "Get Ggis",
  })
  @get()
  static getGgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ggi",
  })
  @post("{id}")
  static createGgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
