import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jrws")
export default class JrwController {
  @operation({
    summary: "Get Jrws",
  })
  @get()
  static getJrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jrw",
  })
  @post("{id}")
  static createJrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
