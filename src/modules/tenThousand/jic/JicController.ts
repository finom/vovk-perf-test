import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jics")
export default class JicController {
  @operation({
    summary: "Get Jics",
  })
  @get()
  static getJics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jic",
  })
  @post("{id}")
  static createJic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
