import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjjs")
export default class JjjController {
  @operation({
    summary: "Get Jjjs",
  })
  @get()
  static getJjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjj",
  })
  @post("{id}")
  static createJjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
