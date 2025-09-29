import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmms")
export default class JmmController {
  @operation({
    summary: "Get Jmms",
  })
  @get()
  static getJmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmm",
  })
  @post("{id}")
  static createJmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
