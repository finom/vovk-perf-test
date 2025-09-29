import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bgis")
export default class BgiController {
  @operation({
    summary: "Get Bgis",
  })
  @get()
  static getBgis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bgi",
  })
  @post("{id}")
  static createBgi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
