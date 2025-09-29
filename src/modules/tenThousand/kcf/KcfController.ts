import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcfs")
export default class KcfController {
  @operation({
    summary: "Get Kcfs",
  })
  @get()
  static getKcfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcf",
  })
  @post("{id}")
  static createKcf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
