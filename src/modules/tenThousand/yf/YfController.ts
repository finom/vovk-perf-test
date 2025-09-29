import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yfs")
export default class YfController {
  @operation({
    summary: "Get Yfs",
  })
  @get()
  static getYfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yf",
  })
  @post("{id}")
  static createYf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
