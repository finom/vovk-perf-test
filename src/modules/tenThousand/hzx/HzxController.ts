import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hzxes")
export default class HzxController {
  @operation({
    summary: "Get Hzxes",
  })
  @get()
  static getHzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hzx",
  })
  @post("{id}")
  static createHzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
