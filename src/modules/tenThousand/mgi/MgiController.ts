import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mgis")
export default class MgiController {
  @operation({
    summary: "Get Mgis",
  })
  @get()
  static getMgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mgi",
  })
  @post("{id}")
  static createMgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
