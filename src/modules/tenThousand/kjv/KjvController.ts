import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kjvs")
export default class KjvController {
  @operation({
    summary: "Get Kjvs",
  })
  @get()
  static getKjvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kjv",
  })
  @post("{id}")
  static createKjv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
