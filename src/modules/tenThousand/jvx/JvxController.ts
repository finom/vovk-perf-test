import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvxes")
export default class JvxController {
  @operation({
    summary: "Get Jvxes",
  })
  @get()
  static getJvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvx",
  })
  @post("{id}")
  static createJvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
