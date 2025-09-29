import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtes")
export default class JteController {
  @operation({
    summary: "Get Jtes",
  })
  @get()
  static getJtes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jte",
  })
  @post("{id}")
  static createJte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
