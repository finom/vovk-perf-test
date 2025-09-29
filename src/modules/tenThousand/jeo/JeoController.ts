import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jeos")
export default class JeoController {
  @operation({
    summary: "Get Jeos",
  })
  @get()
  static getJeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jeo",
  })
  @post("{id}")
  static createJeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
