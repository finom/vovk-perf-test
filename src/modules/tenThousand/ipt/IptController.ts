import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ipts")
export default class IptController {
  @operation({
    summary: "Get Ipts",
  })
  @get()
  static getIpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ipt",
  })
  @post("{id}")
  static createIpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
