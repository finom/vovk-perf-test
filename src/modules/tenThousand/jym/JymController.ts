import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyms")
export default class JymController {
  @operation({
    summary: "Get Jyms",
  })
  @get()
  static getJyms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jym",
  })
  @post("{id}")
  static createJym = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
