import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asks")
export default class AskController {
  @operation({
    summary: "Get Asks",
  })
  @get()
  static getAsks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ask",
  })
  @post("{id}")
  static createAsk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
