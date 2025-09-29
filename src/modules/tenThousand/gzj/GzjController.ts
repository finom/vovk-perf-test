import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzjs")
export default class GzjController {
  @operation({
    summary: "Get Gzjs",
  })
  @get()
  static getGzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzj",
  })
  @post("{id}")
  static createGzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
