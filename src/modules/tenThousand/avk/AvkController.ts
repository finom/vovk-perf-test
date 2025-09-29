import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avks")
export default class AvkController {
  @operation({
    summary: "Get Avks",
  })
  @get()
  static getAvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avk",
  })
  @post("{id}")
  static createAvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
