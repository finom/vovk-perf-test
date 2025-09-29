import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cyjs")
export default class CyjController {
  @operation({
    summary: "Get Cyjs",
  })
  @get()
  static getCyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cyj",
  })
  @post("{id}")
  static createCyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
