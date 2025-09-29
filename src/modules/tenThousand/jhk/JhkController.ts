import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhks")
export default class JhkController {
  @operation({
    summary: "Get Jhks",
  })
  @get()
  static getJhks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jhk",
  })
  @post("{id}")
  static createJhk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
