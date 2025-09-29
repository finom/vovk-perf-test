import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hks")
export default class HkController {
  @operation({
    summary: "Get Hks",
  })
  @get()
  static getHks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hk",
  })
  @post("{id}")
  static createHk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
