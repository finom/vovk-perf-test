import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrhs")
export default class JrhController {
  @operation({
    summary: "Get Jrhs",
  })
  @get()
  static getJrhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrh",
  })
  @post("{id}")
  static createJrh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
