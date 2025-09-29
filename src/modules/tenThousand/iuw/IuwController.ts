import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuws")
export default class IuwController {
  @operation({
    summary: "Get Iuws",
  })
  @get()
  static getIuws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iuw",
  })
  @post("{id}")
  static createIuw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
