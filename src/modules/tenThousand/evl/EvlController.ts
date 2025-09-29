import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("evls")
export default class EvlController {
  @operation({
    summary: "Get Evls",
  })
  @get()
  static getEvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Evl",
  })
  @post("{id}")
  static createEvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
