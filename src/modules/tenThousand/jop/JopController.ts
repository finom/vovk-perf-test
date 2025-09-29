import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jops")
export default class JopController {
  @operation({
    summary: "Get Jops",
  })
  @get()
  static getJops = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jop",
  })
  @post("{id}")
  static createJop = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
