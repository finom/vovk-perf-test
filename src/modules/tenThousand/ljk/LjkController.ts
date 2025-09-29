import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljks")
export default class LjkController {
  @operation({
    summary: "Get Ljks",
  })
  @get()
  static getLjks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljk",
  })
  @post("{id}")
  static createLjk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
