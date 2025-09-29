import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjas")
export default class JjaController {
  @operation({
    summary: "Get Jjas",
  })
  @get()
  static getJjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jja",
  })
  @post("{id}")
  static createJja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
