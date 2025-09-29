import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juses")
export default class JusController {
  @operation({
    summary: "Get Juses",
  })
  @get()
  static getJuses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jus",
  })
  @post("{id}")
  static createJus = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
