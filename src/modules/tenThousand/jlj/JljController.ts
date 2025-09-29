import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jljs")
export default class JljController {
  @operation({
    summary: "Get Jljs",
  })
  @get()
  static getJljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlj",
  })
  @post("{id}")
  static createJlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
