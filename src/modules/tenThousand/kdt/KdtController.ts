import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdts")
export default class KdtController {
  @operation({
    summary: "Get Kdts",
  })
  @get()
  static getKdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdt",
  })
  @post("{id}")
  static createKdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
