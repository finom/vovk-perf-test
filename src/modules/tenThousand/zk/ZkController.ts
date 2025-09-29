import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zks")
export default class ZkController {
  @operation({
    summary: "Get Zks",
  })
  @get()
  static getZks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zk",
  })
  @post("{id}")
  static createZk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
