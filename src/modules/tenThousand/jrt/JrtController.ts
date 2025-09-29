import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrts")
export default class JrtController {
  @operation({
    summary: "Get Jrts",
  })
  @get()
  static getJrts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrt",
  })
  @post("{id}")
  static createJrt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
