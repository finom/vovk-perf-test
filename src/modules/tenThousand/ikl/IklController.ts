import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ikls")
export default class IklController {
  @operation({
    summary: "Get Ikls",
  })
  @get()
  static getIkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ikl",
  })
  @post("{id}")
  static createIkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
