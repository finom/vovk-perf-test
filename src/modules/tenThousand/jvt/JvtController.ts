import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvts")
export default class JvtController {
  @operation({
    summary: "Get Jvts",
  })
  @get()
  static getJvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvt",
  })
  @post("{id}")
  static createJvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
