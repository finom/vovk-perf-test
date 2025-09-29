import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfos")
export default class JfoController {
  @operation({
    summary: "Get Jfos",
  })
  @get()
  static getJfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfo",
  })
  @post("{id}")
  static createJfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
