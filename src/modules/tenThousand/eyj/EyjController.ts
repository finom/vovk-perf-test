import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eyjs")
export default class EyjController {
  @operation({
    summary: "Get Eyjs",
  })
  @get()
  static getEyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eyj",
  })
  @post("{id}")
  static createEyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
