import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jqs")
export default class JqController {
  @operation({
    summary: "Get Jqs",
  })
  @get()
  static getJqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jq",
  })
  @post("{id}")
  static createJq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
