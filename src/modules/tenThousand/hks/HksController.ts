import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hks")
export default class HksController {
  @operation({
    summary: "Get Hks",
  })
  @get()
  static getHks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hks",
  })
  @post("{id}")
  static createHks = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
