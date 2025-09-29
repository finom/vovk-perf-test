import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzs")
export default class GzController {
  @operation({
    summary: "Get Gzs",
  })
  @get()
  static getGzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gz",
  })
  @post("{id}")
  static createGz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
