import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crs")
export default class CrsController {
  @operation({
    summary: "Get Crs",
  })
  @get()
  static getCrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crs",
  })
  @post("{id}")
  static createCrs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
