import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jns")
export default class JnsController {
  @operation({
    summary: "Get Jns",
  })
  @get()
  static getJns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jns",
  })
  @post("{id}")
  static createJns = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
