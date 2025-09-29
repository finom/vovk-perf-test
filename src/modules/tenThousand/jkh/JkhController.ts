import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jkhs")
export default class JkhController {
  @operation({
    summary: "Get Jkhs",
  })
  @get()
  static getJkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jkh",
  })
  @post("{id}")
  static createJkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
