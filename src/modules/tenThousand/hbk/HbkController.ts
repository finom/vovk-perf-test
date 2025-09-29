import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbks")
export default class HbkController {
  @operation({
    summary: "Get Hbks",
  })
  @get()
  static getHbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbk",
  })
  @post("{id}")
  static createHbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
