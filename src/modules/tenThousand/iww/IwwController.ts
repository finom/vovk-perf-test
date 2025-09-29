import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwws")
export default class IwwController {
  @operation({
    summary: "Get Iwws",
  })
  @get()
  static getIwws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iww",
  })
  @post("{id}")
  static createIww = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
