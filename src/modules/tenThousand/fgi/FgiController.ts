import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fgis")
export default class FgiController {
  @operation({
    summary: "Get Fgis",
  })
  @get()
  static getFgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fgi",
  })
  @post("{id}")
  static createFgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
