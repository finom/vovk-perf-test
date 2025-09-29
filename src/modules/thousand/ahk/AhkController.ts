import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahks")
export default class AhkController {
  @operation({
    summary: "Get Ahks",
  })
  @get()
  static getAhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahk",
  })
  @post("{id}")
  static createAhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
