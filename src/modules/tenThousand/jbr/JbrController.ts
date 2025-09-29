import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbrs")
export default class JbrController {
  @operation({
    summary: "Get Jbrs",
  })
  @get()
  static getJbrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbr",
  })
  @post("{id}")
  static createJbr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
