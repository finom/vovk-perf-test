import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrbs")
export default class JrbController {
  @operation({
    summary: "Get Jrbs",
  })
  @get()
  static getJrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrb",
  })
  @post("{id}")
  static createJrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
