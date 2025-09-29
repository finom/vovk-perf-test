import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvms")
export default class JvmController {
  @operation({
    summary: "Get Jvms",
  })
  @get()
  static getJvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvm",
  })
  @post("{id}")
  static createJvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
