import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzps")
export default class GzpController {
  @operation({
    summary: "Get Gzps",
  })
  @get()
  static getGzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzp",
  })
  @post("{id}")
  static createGzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
