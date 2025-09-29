import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hgis")
export default class HgiController {
  @operation({
    summary: "Get Hgis",
  })
  @get()
  static getHgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hgi",
  })
  @post("{id}")
  static createHgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
