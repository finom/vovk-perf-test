import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgis")
export default class JgiController {
  @operation({
    summary: "Get Jgis",
  })
  @get()
  static getJgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgi",
  })
  @post("{id}")
  static createJgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
