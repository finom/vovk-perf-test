import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkks")
export default class JkkController {
  @operation({
    summary: "Get Jkks",
  })
  @get()
  static getJkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkk",
  })
  @post("{id}")
  static createJkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
