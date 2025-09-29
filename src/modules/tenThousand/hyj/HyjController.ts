import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hyjs")
export default class HyjController {
  @operation({
    summary: "Get Hyjs",
  })
  @get()
  static getHyjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hyj",
  })
  @post("{id}")
  static createHyj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
