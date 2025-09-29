import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzls")
export default class GzlController {
  @operation({
    summary: "Get Gzls",
  })
  @get()
  static getGzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzl",
  })
  @post("{id}")
  static createGzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
