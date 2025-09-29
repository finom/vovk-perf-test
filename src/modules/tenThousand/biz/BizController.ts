import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bizs")
export default class BizController {
  @operation({
    summary: "Get Bizs",
  })
  @get()
  static getBizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Biz",
  })
  @post("{id}")
  static createBiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
