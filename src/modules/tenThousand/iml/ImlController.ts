import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imls")
export default class ImlController {
  @operation({
    summary: "Get Imls",
  })
  @get()
  static getImls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iml",
  })
  @post("{id}")
  static createIml = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
