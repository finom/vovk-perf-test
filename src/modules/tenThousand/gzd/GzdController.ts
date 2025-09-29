import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzds")
export default class GzdController {
  @operation({
    summary: "Get Gzds",
  })
  @get()
  static getGzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzd",
  })
  @post("{id}")
  static createGzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
