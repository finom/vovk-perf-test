import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bixes")
export default class BixController {
  @operation({
    summary: "Get Bixes",
  })
  @get()
  static getBixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bix",
  })
  @post("{id}")
  static createBix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
