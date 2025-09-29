import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrds")
export default class JrdController {
  @operation({
    summary: "Get Jrds",
  })
  @get()
  static getJrds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrd",
  })
  @post("{id}")
  static createJrd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
