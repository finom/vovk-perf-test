import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jvies")
export default class JvyController {
  @operation({
    summary: "Get Jvies",
  })
  @get()
  static getJvies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jvy",
  })
  @post("{id}")
  static createJvy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
