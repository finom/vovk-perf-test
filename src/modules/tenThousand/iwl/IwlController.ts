import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iwls")
export default class IwlController {
  @operation({
    summary: "Get Iwls",
  })
  @get()
  static getIwls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iwl",
  })
  @post("{id}")
  static createIwl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
