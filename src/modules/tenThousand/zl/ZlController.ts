import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zls")
export default class ZlController {
  @operation({
    summary: "Get Zls",
  })
  @get()
  static getZls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zl",
  })
  @post("{id}")
  static createZl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
