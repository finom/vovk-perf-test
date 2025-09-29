import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvas")
export default class JvaController {
  @operation({
    summary: "Get Jvas",
  })
  @get()
  static getJvas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jva",
  })
  @post("{id}")
  static createJva = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
