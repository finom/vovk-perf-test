import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbts")
export default class JbtController {
  @operation({
    summary: "Get Jbts",
  })
  @get()
  static getJbts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbt",
  })
  @post("{id}")
  static createJbt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
