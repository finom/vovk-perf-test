import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgcs")
export default class JgcController {
  @operation({
    summary: "Get Jgcs",
  })
  @get()
  static getJgcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgc",
  })
  @post("{id}")
  static createJgc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
