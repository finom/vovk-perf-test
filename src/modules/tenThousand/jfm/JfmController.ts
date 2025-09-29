import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfms")
export default class JfmController {
  @operation({
    summary: "Get Jfms",
  })
  @get()
  static getJfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfm",
  })
  @post("{id}")
  static createJfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
