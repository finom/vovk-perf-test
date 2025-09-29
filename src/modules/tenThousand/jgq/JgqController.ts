import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgqs")
export default class JgqController {
  @operation({
    summary: "Get Jgqs",
  })
  @get()
  static getJgqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgq",
  })
  @post("{id}")
  static createJgq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
