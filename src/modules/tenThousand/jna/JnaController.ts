import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnas")
export default class JnaController {
  @operation({
    summary: "Get Jnas",
  })
  @get()
  static getJnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jna",
  })
  @post("{id}")
  static createJna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
