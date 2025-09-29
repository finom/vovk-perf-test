import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jpos")
export default class JpoController {
  @operation({
    summary: "Get Jpos",
  })
  @get()
  static getJpos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jpo",
  })
  @post("{id}")
  static createJpo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
