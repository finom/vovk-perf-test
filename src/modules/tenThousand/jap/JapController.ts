import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("japs")
export default class JapController {
  @operation({
    summary: "Get Japs",
  })
  @get()
  static getJaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jap",
  })
  @post("{id}")
  static createJap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
