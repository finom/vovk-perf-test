import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jais")
export default class JaiController {
  @operation({
    summary: "Get Jais",
  })
  @get()
  static getJais = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jai",
  })
  @post("{id}")
  static createJai = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
