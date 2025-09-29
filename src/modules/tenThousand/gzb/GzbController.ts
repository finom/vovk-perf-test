import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzbs")
export default class GzbController {
  @operation({
    summary: "Get Gzbs",
  })
  @get()
  static getGzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzb",
  })
  @post("{id}")
  static createGzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
