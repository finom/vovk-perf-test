import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgfs")
export default class JgfController {
  @operation({
    summary: "Get Jgfs",
  })
  @get()
  static getJgfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgf",
  })
  @post("{id}")
  static createJgf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
