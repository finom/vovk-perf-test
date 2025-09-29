import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jches")
export default class JchController {
  @operation({
    summary: "Get Jches",
  })
  @get()
  static getJches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jch",
  })
  @post("{id}")
  static createJch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
