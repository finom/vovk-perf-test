import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnis")
export default class JniController {
  @operation({
    summary: "Get Jnis",
  })
  @get()
  static getJnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jni",
  })
  @post("{id}")
  static createJni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
