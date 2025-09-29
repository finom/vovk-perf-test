import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmts")
export default class HmtController {
  @operation({
    summary: "Get Hmts",
  })
  @get()
  static getHmts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmt",
  })
  @post("{id}")
  static createHmt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
