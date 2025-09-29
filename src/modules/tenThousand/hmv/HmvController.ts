import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmvs")
export default class HmvController {
  @operation({
    summary: "Get Hmvs",
  })
  @get()
  static getHmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmv",
  })
  @post("{id}")
  static createHmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
