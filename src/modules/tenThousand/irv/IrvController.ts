import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("irvs")
export default class IrvController {
  @operation({
    summary: "Get Irvs",
  })
  @get()
  static getIrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Irv",
  })
  @post("{id}")
  static createIrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
