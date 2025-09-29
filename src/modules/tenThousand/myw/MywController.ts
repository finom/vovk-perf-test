import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myws")
export default class MywController {
  @operation({
    summary: "Get Myws",
  })
  @get()
  static getMyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myw",
  })
  @post("{id}")
  static createMyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
