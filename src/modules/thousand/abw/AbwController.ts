import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abws")
export default class AbwController {
  @operation({
    summary: "Get Abws",
  })
  @get()
  static getAbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abw",
  })
  @post("{id}")
  static createAbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
