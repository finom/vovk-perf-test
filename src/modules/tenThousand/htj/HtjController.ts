import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htjs")
export default class HtjController {
  @operation({
    summary: "Get Htjs",
  })
  @get()
  static getHtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htj",
  })
  @post("{id}")
  static createHtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
