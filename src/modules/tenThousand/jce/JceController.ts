import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jces")
export default class JceController {
  @operation({
    summary: "Get Jces",
  })
  @get()
  static getJces = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jce",
  })
  @post("{id}")
  static createJce = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
