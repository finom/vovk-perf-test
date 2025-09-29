import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzns")
export default class GznController {
  @operation({
    summary: "Get Gzns",
  })
  @get()
  static getGzns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzn",
  })
  @post("{id}")
  static createGzn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
