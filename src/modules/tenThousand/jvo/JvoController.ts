import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvos")
export default class JvoController {
  @operation({
    summary: "Get Jvos",
  })
  @get()
  static getJvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvo",
  })
  @post("{id}")
  static createJvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
