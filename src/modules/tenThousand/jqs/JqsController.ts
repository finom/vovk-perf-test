import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqs")
export default class JqsController {
  @operation({
    summary: "Get Jqs",
  })
  @get()
  static getJqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jqs",
  })
  @post("{id}")
  static createJqs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
