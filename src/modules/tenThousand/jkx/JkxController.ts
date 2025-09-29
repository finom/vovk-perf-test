import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkxes")
export default class JkxController {
  @operation({
    summary: "Get Jkxes",
  })
  @get()
  static getJkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkx",
  })
  @post("{id}")
  static createJkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
