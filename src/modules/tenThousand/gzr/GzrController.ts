import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzrs")
export default class GzrController {
  @operation({
    summary: "Get Gzrs",
  })
  @get()
  static getGzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzr",
  })
  @post("{id}")
  static createGzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
