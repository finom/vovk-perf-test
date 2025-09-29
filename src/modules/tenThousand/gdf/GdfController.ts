import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdfs")
export default class GdfController {
  @operation({
    summary: "Get Gdfs",
  })
  @get()
  static getGdfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdf",
  })
  @post("{id}")
  static createGdf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
