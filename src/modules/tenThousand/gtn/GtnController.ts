import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtns")
export default class GtnController {
  @operation({
    summary: "Get Gtns",
  })
  @get()
  static getGtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtn",
  })
  @post("{id}")
  static createGtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
