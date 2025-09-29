import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzws")
export default class GzwController {
  @operation({
    summary: "Get Gzws",
  })
  @get()
  static getGzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzw",
  })
  @post("{id}")
  static createGzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
