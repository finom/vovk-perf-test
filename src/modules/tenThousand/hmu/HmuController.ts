import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmus")
export default class HmuController {
  @operation({
    summary: "Get Hmus",
  })
  @get()
  static getHmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmu",
  })
  @post("{id}")
  static createHmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
