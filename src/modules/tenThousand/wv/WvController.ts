import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wvs")
export default class WvController {
  @operation({
    summary: "Get Wvs",
  })
  @get()
  static getWvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wv",
  })
  @post("{id}")
  static createWv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
