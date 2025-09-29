import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jaks")
export default class JakController {
  @operation({
    summary: "Get Jaks",
  })
  @get()
  static getJaks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jak",
  })
  @post("{id}")
  static createJak = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
