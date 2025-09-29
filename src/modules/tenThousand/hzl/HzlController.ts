import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzls")
export default class HzlController {
  @operation({
    summary: "Get Hzls",
  })
  @get()
  static getHzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzl",
  })
  @post("{id}")
  static createHzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
