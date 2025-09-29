import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzks")
export default class HzkController {
  @operation({
    summary: "Get Hzks",
  })
  @get()
  static getHzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzk",
  })
  @post("{id}")
  static createHzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
