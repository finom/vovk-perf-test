import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbks")
export default class GbkController {
  @operation({
    summary: "Get Gbks",
  })
  @get()
  static getGbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbk",
  })
  @post("{id}")
  static createGbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
