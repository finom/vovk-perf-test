import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jods")
export default class JodController {
  @operation({
    summary: "Get Jods",
  })
  @get()
  static getJods = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jod",
  })
  @post("{id}")
  static createJod = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
