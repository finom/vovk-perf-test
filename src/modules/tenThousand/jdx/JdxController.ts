import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdxes")
export default class JdxController {
  @operation({
    summary: "Get Jdxes",
  })
  @get()
  static getJdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdx",
  })
  @post("{id}")
  static createJdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
