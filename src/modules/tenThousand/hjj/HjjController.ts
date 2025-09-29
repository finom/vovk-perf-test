import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hjjs")
export default class HjjController {
  @operation({
    summary: "Get Hjjs",
  })
  @get()
  static getHjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hjj",
  })
  @post("{id}")
  static createHjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
