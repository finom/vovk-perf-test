import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jles")
export default class JleController {
  @operation({
    summary: "Get Jles",
  })
  @get()
  static getJles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jle",
  })
  @post("{id}")
  static createJle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
