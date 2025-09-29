import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmjs")
export default class LmjController {
  @operation({
    summary: "Get Lmjs",
  })
  @get()
  static getLmjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmj",
  })
  @post("{id}")
  static createLmj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
