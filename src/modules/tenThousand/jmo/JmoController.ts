import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jmos")
export default class JmoController {
  @operation({
    summary: "Get Jmos",
  })
  @get()
  static getJmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jmo",
  })
  @post("{id}")
  static createJmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
