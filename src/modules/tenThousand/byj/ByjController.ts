import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("byjs")
export default class ByjController {
  @operation({
    summary: "Get Byjs",
  })
  @get()
  static getByjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Byj",
  })
  @post("{id}")
  static createByj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
