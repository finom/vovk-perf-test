import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ifws")
export default class IfwController {
  @operation({
    summary: "Get Ifws",
  })
  @get()
  static getIfws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ifw",
  })
  @post("{id}")
  static createIfw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
