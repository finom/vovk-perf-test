import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iegs")
export default class IegController {
  @operation({
    summary: "Get Iegs",
  })
  @get()
  static getIegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ieg",
  })
  @post("{id}")
  static createIeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
