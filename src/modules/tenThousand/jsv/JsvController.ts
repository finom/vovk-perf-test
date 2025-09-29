import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsvs")
export default class JsvController {
  @operation({
    summary: "Get Jsvs",
  })
  @get()
  static getJsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsv",
  })
  @post("{id}")
  static createJsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
