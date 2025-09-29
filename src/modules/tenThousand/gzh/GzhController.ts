import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzhs")
export default class GzhController {
  @operation({
    summary: "Get Gzhs",
  })
  @get()
  static getGzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzh",
  })
  @post("{id}")
  static createGzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
