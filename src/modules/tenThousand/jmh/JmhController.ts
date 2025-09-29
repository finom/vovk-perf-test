import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmhs")
export default class JmhController {
  @operation({
    summary: "Get Jmhs",
  })
  @get()
  static getJmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmh",
  })
  @post("{id}")
  static createJmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
