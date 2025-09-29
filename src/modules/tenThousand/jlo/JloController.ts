import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlos")
export default class JloController {
  @operation({
    summary: "Get Jlos",
  })
  @get()
  static getJlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlo",
  })
  @post("{id}")
  static createJlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
