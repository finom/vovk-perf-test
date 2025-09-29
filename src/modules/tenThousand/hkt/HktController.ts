import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkts")
export default class HktController {
  @operation({
    summary: "Get Hkts",
  })
  @get()
  static getHkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkt",
  })
  @post("{id}")
  static createHkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
