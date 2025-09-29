import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jjos")
export default class JjoController {
  @operation({
    summary: "Get Jjos",
  })
  @get()
  static getJjos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jjo",
  })
  @post("{id}")
  static createJjo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
