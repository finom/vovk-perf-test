import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjbs")
export default class JjbController {
  @operation({
    summary: "Get Jjbs",
  })
  @get()
  static getJjbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjb",
  })
  @post("{id}")
  static createJjb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
