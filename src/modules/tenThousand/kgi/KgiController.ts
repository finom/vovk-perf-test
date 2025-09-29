import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kgis")
export default class KgiController {
  @operation({
    summary: "Get Kgis",
  })
  @get()
  static getKgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kgi",
  })
  @post("{id}")
  static createKgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
