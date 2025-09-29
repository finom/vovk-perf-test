import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtjs")
export default class GtjController {
  @operation({
    summary: "Get Gtjs",
  })
  @get()
  static getGtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtj",
  })
  @post("{id}")
  static createGtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
