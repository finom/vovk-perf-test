import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcrs")
export default class KcrController {
  @operation({
    summary: "Get Kcrs",
  })
  @get()
  static getKcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcr",
  })
  @post("{id}")
  static createKcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
