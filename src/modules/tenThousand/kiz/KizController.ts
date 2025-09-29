import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kizs")
export default class KizController {
  @operation({
    summary: "Get Kizs",
  })
  @get()
  static getKizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kiz",
  })
  @post("{id}")
  static createKiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
