import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jens")
export default class JenController {
  @operation({
    summary: "Get Jens",
  })
  @get()
  static getJens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jen",
  })
  @post("{id}")
  static createJen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
