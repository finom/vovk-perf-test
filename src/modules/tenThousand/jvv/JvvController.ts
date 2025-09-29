import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvvs")
export default class JvvController {
  @operation({
    summary: "Get Jvvs",
  })
  @get()
  static getJvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvv",
  })
  @post("{id}")
  static createJvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
