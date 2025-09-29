import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgts")
export default class JgtController {
  @operation({
    summary: "Get Jgts",
  })
  @get()
  static getJgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgt",
  })
  @post("{id}")
  static createJgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
