import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huys")
export default class HuyController {
  @operation({
    summary: "Get Huys",
  })
  @get()
  static getHuys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Huy",
  })
  @post("{id}")
  static createHuy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
