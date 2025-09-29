import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlies")
export default class JlyController {
  @operation({
    summary: "Get Jlies",
  })
  @get()
  static getJlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jly",
  })
  @post("{id}")
  static createJly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
