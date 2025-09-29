import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgds")
export default class JgdController {
  @operation({
    summary: "Get Jgds",
  })
  @get()
  static getJgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgd",
  })
  @post("{id}")
  static createJgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
