import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yxes")
export default class YxController {
  @operation({
    summary: "Get Yxes",
  })
  @get()
  static getYxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yx",
  })
  @post("{id}")
  static createYx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
