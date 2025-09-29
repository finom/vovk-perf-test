import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jffs")
export default class JffController {
  @operation({
    summary: "Get Jffs",
  })
  @get()
  static getJffs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jff",
  })
  @post("{id}")
  static createJff = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
