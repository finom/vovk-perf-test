import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ljjs")
export default class LjjController {
  @operation({
    summary: "Get Ljjs",
  })
  @get()
  static getLjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ljj",
  })
  @post("{id}")
  static createLjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
