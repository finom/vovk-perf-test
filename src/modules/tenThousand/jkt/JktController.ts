import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkts")
export default class JktController {
  @operation({
    summary: "Get Jkts",
  })
  @get()
  static getJkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkt",
  })
  @post("{id}")
  static createJkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
