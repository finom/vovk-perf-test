import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlks")
export default class JlkController {
  @operation({
    summary: "Get Jlks",
  })
  @get()
  static getJlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlk",
  })
  @post("{id}")
  static createJlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
