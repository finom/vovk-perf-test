import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tjs")
export default class TjController {
  @operation({
    summary: "Get Tjs",
  })
  @get()
  static getTjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tj",
  })
  @post("{id}")
  static createTj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
