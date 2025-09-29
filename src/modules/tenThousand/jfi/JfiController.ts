import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfis")
export default class JfiController {
  @operation({
    summary: "Get Jfis",
  })
  @get()
  static getJfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfi",
  })
  @post("{id}")
  static createJfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
