import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzs")
export default class JzController {
  @operation({
    summary: "Get Jzs",
  })
  @get()
  static getJzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jz",
  })
  @post("{id}")
  static createJz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
