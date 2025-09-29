import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aops")
export default class AopController {
  @operation({
    summary: "Get Aops",
  })
  @get()
  static getAops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aop",
  })
  @post("{id}")
  static createAop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
