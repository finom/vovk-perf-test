import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dgis")
export default class DgiController {
  @operation({
    summary: "Get Dgis",
  })
  @get()
  static getDgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dgi",
  })
  @post("{id}")
  static createDgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
