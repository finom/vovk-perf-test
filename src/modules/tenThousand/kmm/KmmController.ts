import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmms")
export default class KmmController {
  @operation({
    summary: "Get Kmms",
  })
  @get()
  static getKmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmm",
  })
  @post("{id}")
  static createKmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
