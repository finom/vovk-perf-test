import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdws")
export default class JdwController {
  @operation({
    summary: "Get Jdws",
  })
  @get()
  static getJdws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdw",
  })
  @post("{id}")
  static createJdw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
