import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctrs")
export default class CtrController {
  @operation({
    summary: "Get Ctrs",
  })
  @get()
  static getCtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctr",
  })
  @post("{id}")
  static createCtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
