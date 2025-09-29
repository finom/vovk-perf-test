import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jojs")
export default class JojController {
  @operation({
    summary: "Get Jojs",
  })
  @get()
  static getJojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Joj",
  })
  @post("{id}")
  static createJoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
