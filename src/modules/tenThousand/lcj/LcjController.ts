import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcjs")
export default class LcjController {
  @operation({
    summary: "Get Lcjs",
  })
  @get()
  static getLcjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcj",
  })
  @post("{id}")
  static createLcj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
