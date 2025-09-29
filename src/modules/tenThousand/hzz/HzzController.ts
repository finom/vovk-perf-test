import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzzes")
export default class HzzController {
  @operation({
    summary: "Get Hzzes",
  })
  @get()
  static getHzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzz",
  })
  @post("{id}")
  static createHzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
