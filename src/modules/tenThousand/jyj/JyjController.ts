import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyjs")
export default class JyjController {
  @operation({
    summary: "Get Jyjs",
  })
  @get()
  static getJyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyj",
  })
  @post("{id}")
  static createJyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
